const input = ``; // Paste data here

// Step 1: break into raw lines
const rawLines = input.split("\n");

const rows = [];
let buffer = "";

// Step 2: rebuild rows until we have 4 tabs (5 columns)
for (let line of rawLines) {
    if (!line.trim()) continue;

    buffer += (buffer ? "\n" : "") + line;

    const tabCount = (buffer.match(/\t/g) || []).length;

    if (tabCount >= 4) {
        rows.push(buffer);
        buffer = "";
    }
}

// Step 3: parse and format
const output = rows.map(row => {
    const parts = row.split("\t");

    const [name, title, date, medium, price] = parts;

    return `${name.trim()}\t\t${(date || "").trim()}
${(title || "").trim()}
${(medium || "").trim()}
${(price || "").trim()}
`;
});

// Step 4: print result
console.log(output.join("\n\n\n"));