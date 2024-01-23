import { Collection } from "tinacms";

export const navbarCollection : Collection = {
    label: 'Navbar',
    name: 'navbar',
    path: 'content/navbar',
    format:'json',
    fields: [
      {
        label: 'Logo',
        name: 'logo',
        type: 'image',
      },
      {
        label: 'Links',
        name: 'links',
        type: 'object',
        list:true,
        fields: [
          {
            label: 'Link',
            name: 'link',
            type: 'string',
          },
          {
            label: 'NavLinks',
            name: 'nav_links',
            type: 'object',
            list:true,
            fields: [
              {
                label: 'Title',
                name: 'nav_link',
                type: 'string',
              },
              {
                label: 'URL',
                name: 'url',
                type: 'string',
              },
              {
                label: 'Sub Nav Links',
                name: 'sub_nav_link',
                type: 'object',
                list:true,
                fields: [
                  {
                    label: 'Sub Nav Link',
                    name: 'sub_nav_link',
                    type: 'string',
                  },
                  {
                    label: 'URL',
                    name: 'url',
                    type: 'string',
                  },
                  {
                    label: 'Card',
                    name: 'card',
                    type: 'object',
                    list:true,
                    fields: [
                      {
                        label: 'Title',
                        name: 'title',
                        type: 'string',
                      },
                      {
                        label: 'Description',
                        name: 'description',
                        type: 'string',
                      },
                      {
                        label: 'Button',
                        name: 'btn',
                        type: 'object',
                        fields: [
                          {
                            label: 'Button',
                            name: 'button',
                            type: 'string',
                          },
                        ],
                      },
                      {
                        label: 'Image',
                        name: 'image',
                        type: 'image',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        label: 'Button',
        name: 'btn',
        type: 'object',
        fields: [
          {
            label: 'Button',
            name: 'button',
            type: 'string',
          },
        ],
      },
    ],
};
  
  export default navbarCollection;
  