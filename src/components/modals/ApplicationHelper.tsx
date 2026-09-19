import React, { useEffect, useMemo, useRef, useState } from "react";
import {
    Alert,
    Box,
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    IconButton,
    Snackbar,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import {
    Controller,
    useForm,
    type ControllerRenderProps,
} from "react-hook-form";

type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    onlinePresence: string;

    artPractice: string;
    bio: string;

    excitedAboutMembership: string;
    concernsAboutMembership: string;
    canFulfillExpectations: boolean;
};

// All the free-text fields rendered through renderTextField. Excluding
// canFulfillExpectations here is what keeps `field.value` typed as `string`
// (rather than `string | boolean`) throughout that helper.
type TextFieldName = Exclude<keyof FormValues, "canFulfillExpectations">;

type ApplicationHelperProps = {
    open: boolean;
    onClose: () => void;
    onOpen: () => void;

    /**
     * Optional callback if you want the formatted application
     * available to the parent component.
     */
    onSubmitApplication?: (data: FormValues, formattedText: string) => void;
};

const defaultValues: FormValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    onlinePresence: "",

    artPractice: "",
    bio: "",

    excitedAboutMembership: "",
    concernsAboutMembership: "",
    canFulfillExpectations: false,
};

// --- Draft persistence -----------------------------------------------------
// Drafts are saved to localStorage so a user doesn't lose their answers if
// they accidentally close the drawer, refresh, or navigate away mid-form.
// Saving is always allowed on partial/incomplete data — validation only
// gates the "Copy for Email" action, not persistence.

const STORAGE_KEY = "front-gallery-membership-draft";
const AUTOSAVE_DELAY_MS = 500;

function isBrowser() {
    return typeof window !== "undefined" && !!window.localStorage;
}

function hasSavedDraft(): boolean {
    if (!isBrowser()) return false;
    try {
        return window.localStorage.getItem(STORAGE_KEY) !== null;
    } catch (error) {
        console.error("Unable to check for saved draft:", error);
        return false;
    }
}

function loadDraft(): FormValues {
    if (!isBrowser()) return defaultValues;
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) return defaultValues;
        const parsed = JSON.parse(raw);
        // Merge over defaults so new fields added later always have a value,
        // even if an older draft is missing them.
        return { ...defaultValues, ...parsed };
    } catch (error) {
        console.error("Unable to load saved draft:", error);
        return defaultValues;
    }
}

function saveDraft(values: FormValues) {
    if (!isBrowser()) return;
    try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
    } catch (error) {
        console.error("Unable to save draft:", error);
    }
}

function clearDraft() {
    if (!isBrowser()) return;
    try {
        window.localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
        console.error("Unable to clear draft:", error);
    }
}

// -----------------------------------------------------------------------

const ApplicationHelper = ({
    open,
    onClose,
    onOpen,
    onSubmitApplication,
}: ApplicationHelperProps) => {
    const [copied, setCopied] = useState(false);
    const [draftRestored, setDraftRestored] = useState(false);
    const [saveConfirmationOpen, setSaveConfirmationOpen] = useState(false);

    const {
        control,
        watch,
        reset,
        formState: { errors },
    } = useForm<FormValues>({
        defaultValues: loadDraft(),
        mode: "onBlur",
    });

    // Only show the "draft restored" banner if there was actually a draft
    // sitting in storage when the form first mounted.
    useEffect(() => {
        setDraftRestored(hasSavedDraft());
    }, []);

    const values = watch();

    // Debounced autosave: wait for a short pause in typing before writing to
    // localStorage, rather than writing on every keystroke.
    const saveTimeoutRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        if (saveTimeoutRef.current) {
            window.clearTimeout(saveTimeoutRef.current);
        }

        saveTimeoutRef.current = window.setTimeout(() => {
            saveDraft(values);
        }, AUTOSAVE_DELAY_MS);

        return () => {
            if (saveTimeoutRef.current) {
                window.clearTimeout(saveTimeoutRef.current);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(values)]);

    const formattedApplication = useMemo(() => {
        const fullName = [values.firstName, values.lastName]
            .filter(Boolean)
            .join(" ");

        return `FRONT GALLERY MEMBERSHIP APPLICATION

CONTACT

Name: ${fullName}
Email: ${values.email}
Phone: ${values.phone}
Town/City: ${values.city}
Online presence: ${values.onlinePresence || "N/A"}


STATEMENT

Tell us briefly about your art practice.

${values.artPractice}


BIO

Tell us a little about yourself.

${values.bio}


MEMBERSHIP IN THE COOPERATIVE

What excites you most about gallery membership?

${values.excitedAboutMembership}


What concerns you most?

${values.concernsAboutMembership}


Can you fulfill the membership expectations?

${values.canFulfillExpectations ? "Yes" : "No / I have some limitations I would like to discuss."}


MEMBERSHIP EXPECTATIONS

• Spend at least one 3-hour shift staffing the gallery every month
• Submit work for group shows every 2 months
• Attend all-member meetings once every 2 months
• Work on gallery committees with fellow members
• Contribute dues (nominally $50/month) as feasible
`;
    }, [values]);

    const copyApplication = async () => {
        try {
            await navigator.clipboard.writeText(formattedApplication);
            setCopied(true);

            window.setTimeout(() => {
                setCopied(false);
            }, 2500);
        } catch (error) {
            console.error("Unable to copy application:", error);
        }
    };

    // Saving is intentionally NOT gated by form validation — someone should
    // be able to save partial progress (e.g. half-finished answers) and come
    // back later. Validation only matters for "Copy for Email".
    const handleSave = () => {
        saveDraft(values);
        onSubmitApplication?.(values, formattedApplication);
        setSaveConfirmationOpen(true);
    };

    const discardDraft = () => {
        clearDraft();
        reset(defaultValues);
        setDraftRestored(false);
    };

    function renderTextField<TName extends TextFieldName>(
        name: TName,
        label: string,
        options: {
            required?: boolean;
            multiline?: boolean;
            minRows?: number;
            placeholder?: string;
            helperText?: string;
            type?: string;
        } = {}
    ) {
        const {
            required = false,
            multiline = false,
            minRows = 4,
            placeholder,
            helperText,
            type = "text",
        } = options;

        return (
            <Controller<FormValues, TName>
                name={name}
                control={control}
                rules={{
                    required: required ? `${label} is required` : false,
                    ...(type === "email"
                        ? {
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Please enter a valid email address",
                            },
                        }
                        : {}),
                }}
                render={({
                    field,
                }: {
                    field: ControllerRenderProps<FormValues, TName>;
                }) => (
                    <TextField
                        {...field}
                        fullWidth
                        label={label}
                        type={type}
                        required={required}
                        multiline={multiline}
                        minRows={multiline ? minRows : undefined}
                        placeholder={placeholder}
                        helperText={errors[name]?.message?.toString() || helperText}
                        error={Boolean(errors[name])}
                        slotProps={{
                            inputLabel: {
                                shrink: Boolean(field.value),
                            },
                        }}
                    />
                )}
            />
        );
    }

    return (
        <SwipeableDrawer
            anchor="right"
            open={open}
            onClose={onClose}
            onOpen={onOpen}
            PaperProps={{
                sx: {
                    width: {
                        xs: "100%",
                        sm: 560,
                        md: 640,
                    },
                    maxWidth: "100%",
                },
            }}
        >
            <Box
                component="form"
                onSubmit={(event) => {
                    // Enter-key submission just saves progress too — no
                    // validation gate, same as clicking the Save button.
                    event.preventDefault();
                    handleSave();
                }}
                sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {/* Header */}
                <Box
                    sx={{
                        px: 3,
                        py: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderBottom: 1,
                        borderColor: "divider",
                        flexShrink: 0,
                    }}
                >
                    <Box>
                        <Typography variant="h6" fontWeight={600}>
                            Gallery Membership Helper
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            Gather your responses and prepare them for email.
                        </Typography>
                    </Box>

                    <IconButton onClick={onClose} aria-label="Close">
                        <CloseIcon />
                    </IconButton>
                </Box>

                {/* Scrollable content */}
                <Box
                    sx={{
                        flex: 1,
                        overflowY: "auto",
                        px: { xs: 2, sm: 3 },
                        py: 3,
                    }}
                >
                    <Stack spacing={4}>
                        {draftRestored && (
                            <Alert
                                severity="info"
                                onClose={() => setDraftRestored(false)}
                                sx={{ "& .MuiAlert-action": { alignItems: "center" } }}
                            >
                                We restored your saved draft. Keep going, or{" "}
                                <Box
                                    component="button"
                                    type="button"
                                    onClick={discardDraft}
                                    sx={{
                                        background: "none",
                                        border: "none",
                                        p: 0,
                                        font: "inherit",
                                        color: "inherit",
                                        textDecoration: "underline",
                                        cursor: "pointer",
                                    }}
                                >
                                    start over
                                </Box>
                                .
                            </Alert>
                        )}

                        {/* Contact */}
                        <Box>
                            <Typography variant="h6" gutterBottom>
                                Contact
                            </Typography>

                            <Typography variant="body2" color="text.secondary" mb={2}>
                                Tell us how we can reach you.
                            </Typography>

                            <Stack spacing={2}>
                                {renderTextField("firstName", "First name", {
                                    required: true,
                                })}

                                {renderTextField("lastName", "Last name", {
                                    required: true,
                                })}

                                {renderTextField("email", "Email address", {
                                    required: true,
                                    type: "email",
                                })}

                                {renderTextField("phone", "Phone number", {
                                    required: true,
                                    type: "tel",
                                })}

                                {renderTextField("city", "Town or city of residence", {
                                    required: true,
                                })}

                                {renderTextField(
                                    "onlinePresence",
                                    "Online presence",
                                    {
                                        placeholder:
                                            "Instagram, website, portfolio, etc. (optional)",
                                        helperText:
                                            "Include any links or handles that are relevant to your art practice.",
                                    }
                                )}
                            </Stack>
                        </Box>

                        <Divider />

                        {/* Statement */}
                        <Box>
                            <Typography variant="h6" gutterBottom>
                                Statement
                            </Typography>

                            <Typography variant="body2" color="text.secondary" mb={2}>
                                Tell us briefly about your art practice.
                            </Typography>

                            {renderTextField("artPractice", "Art practice", {
                                required: true,
                                multiline: true,
                                minRows: 5,
                                placeholder:
                                    "Describe your work, materials, interests, process, or artistic approach...",
                            })}
                        </Box>

                        <Divider />

                        {/* Bio */}
                        <Box>
                            <Typography variant="h6" gutterBottom>
                                Bio
                            </Typography>

                            <Typography variant="body2" color="text.secondary" mb={2}>
                                Tell us a little about yourself.
                            </Typography>

                            {renderTextField("bio", "About you", {
                                required: true,
                                multiline: true,
                                minRows: 5,
                                placeholder:
                                    "Share whatever background or context you'd like us to know...",
                            })}
                        </Box>

                        <Divider />

                        {/* Membership */}
                        <Box>
                            <Typography variant="h6" gutterBottom>
                                Membership in the Cooperative
                            </Typography>

                            <Typography variant="body2" color="text.secondary" mb={2}>
                                The Front relies on members' energy and collaboration to keep
                                going.
                            </Typography>

                            <Stack
                                spacing={1}
                                sx={{
                                    mb: 3,
                                    p: 2,
                                    bgcolor: "action.hover",
                                    borderRadius: 2,
                                }}
                            >
                                <Typography variant="body2">
                                    • Spend at least one 3-hour shift staffing the gallery every
                                    month
                                </Typography>

                                <Typography variant="body2">
                                    • Submit work for group shows every 2 months
                                </Typography>

                                <Typography variant="body2">
                                    • Attend all-member meetings once every 2 months (usually
                                    ~2 hours)
                                </Typography>

                                <Typography variant="body2">
                                    • Work on gallery committees (e.g. Events, Finance,
                                    Installation) with fellow members
                                </Typography>

                                <Typography variant="body2">
                                    • Contribute dues (nominally $50/month) as feasible
                                </Typography>
                            </Stack>

                            <Stack spacing={3}>
                                {renderTextField(
                                    "excitedAboutMembership",
                                    "What excites you most about gallery membership?",
                                    {
                                        required: true,
                                        multiline: true,
                                        minRows: 5,
                                        placeholder:
                                            "What are you looking forward to contributing to or getting from the cooperative?",
                                    }
                                )}

                                {renderTextField(
                                    "concernsAboutMembership",
                                    "What concerns you most?",
                                    {
                                        required: true,
                                        multiline: true,
                                        minRows: 4,
                                        placeholder:
                                            "Are there aspects of membership you'd like to discuss or learn more about?",
                                    }
                                )}

                                <Controller<FormValues, "canFulfillExpectations">
                                    name="canFulfillExpectations"
                                    control={control}
                                    rules={{
                                        validate: (value) =>
                                            value ||
                                            "Please indicate whether you can fulfill the membership expectations.",
                                    }}
                                    render={({
                                        field,
                                    }: {
                                        field: ControllerRenderProps<
                                            FormValues,
                                            "canFulfillExpectations"
                                        >;
                                    }) => (
                                        <Box>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={field.value}
                                                        onChange={(event) =>
                                                            field.onChange(event.target.checked)
                                                        }
                                                    />
                                                }
                                                label="I believe I can fulfill the membership expectations described above."
                                            />

                                            {errors.canFulfillExpectations && (
                                                <Typography
                                                    variant="caption"
                                                    color="error"
                                                    display="block"
                                                    sx={{ ml: 2 }}
                                                >
                                                    {errors.canFulfillExpectations.message}
                                                </Typography>
                                            )}
                                        </Box>
                                    )}
                                />

                                <Alert severity="info">
                                    You do not need to discuss your finances. Applicants will
                                    not be turned away for lack of ability to pay dues.
                                </Alert>
                            </Stack>
                        </Box>

                        <Divider />

                        {/* Preview */}
                        <Box>
                            <Typography variant="h6" gutterBottom>
                                Email Preview
                            </Typography>

                            <Typography variant="body2" color="text.secondary" mb={2}>
                                Your responses will be formatted as plain text so you can
                                paste them directly into an email.
                            </Typography>

                            <Box
                                component="pre"
                                sx={{
                                    whiteSpace: "pre-wrap",
                                    wordBreak: "break-word",
                                    fontFamily: "monospace",
                                    fontSize: "0.8rem",
                                    lineHeight: 1.6,
                                    p: 2,
                                    bgcolor: "grey.100",
                                    borderRadius: 2,
                                    maxHeight: 400,
                                    overflow: "auto",
                                    m: 0,
                                }}
                            >
                                {formattedApplication}
                            </Box>
                        </Box>
                    </Stack>
                </Box>

                {/* Footer */}
                <Box
                    sx={{
                        borderTop: 1,
                        borderColor: "divider",
                        p: 2,
                        bgcolor: "background.paper",
                        flexShrink: 0,
                    }}
                >
                    <Stack direction="row" spacing={1.5}>
                        <Button
                            variant="contained"
                            startIcon={
                                copied ? <CheckCircleOutlineIcon /> : <ContentCopyIcon />
                            }
                            onClick={copyApplication}
                            fullWidth
                        >
                            {copied ? "Copied!" : "Copy for Email"}
                        </Button>

                        {/* type="button" (not "submit") so this never runs
                            react-hook-form's required-field validation — it
                            just persists whatever has been filled in so far. */}
                        <Button
                            type="button"
                            variant="outlined"
                            sx={{ minWidth: 120 }}
                            onClick={handleSave}
                        >
                            Save
                        </Button>
                    </Stack>
                </Box>
            </Box>

            <Snackbar
                open={saveConfirmationOpen}
                autoHideDuration={2500}
                onClose={() => setSaveConfirmationOpen(false)}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert
                    severity="success"
                    variant="filled"
                    onClose={() => setSaveConfirmationOpen(false)}
                    sx={{ width: "100%" }}
                >
                    Saved
                </Alert>
            </Snackbar>
        </SwipeableDrawer>
    );
}

export default ApplicationHelper;
