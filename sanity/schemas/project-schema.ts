const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt", type: "string" }],
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "start_date",
      title: "Start Date",
      type: "date",
      options: {
        dateFormat: "MMM YYYY",
      },
    },
    {
      name: "end_date",
      title: "End Date",
      type: "date",
      options: {
        dateFormat: "MMM YYYY",
      },
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
}

export default project
