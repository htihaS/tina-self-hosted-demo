import { Collection } from "tinacms";

export const HomeCollection: Collection = {
  name: "home",
  label: "Home",
  path: "content/home",
  format: "json",
  ui: {
    router: () => "/",
  },
  fields: [
    {
      type: "string",
      name: "Header",
      label: "Header",
    },
    {
      type: "object",
      name: "logo",
      label: "Logo",
      fields: [
        { type: "image", name: "url", label: "URL" },
        { type: "string", name: "alt", label: "Alt Text" },
      ],
    },
    {
      type: "object",
      list: true,
      name: "links",
      label: "Links",
      ui: {
        itemProps: (item) => {
          return {
            label: item?.header,
          };
        },
      },
      fields: [
        { type: "string", name: "header" },
        { type: "string", name: "description" },
        { type: "string", name: "url" },
      ],
    },
  ],
};
