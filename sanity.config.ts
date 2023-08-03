import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"

const config = defineConfig({
  projectId: "h8ww2091",
  dataset: "production",
  title: "Personal Website",
  apiVersion: "2023-08-02",
  basePath: "/admin",
  plugins: [deskTool()],
})

export default config
