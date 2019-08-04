const TypeDoc = require("typedoc")

const app = new TypeDoc.Application({
    name: "Minecraft Bedrock Scripting API",
    includeDeclarations: true,
    exclude: "*/+(typescript|@types)/**",
    mode: "file"
})

app.application.generateDocs(
    ["index.ts"],
    "docs"
)
