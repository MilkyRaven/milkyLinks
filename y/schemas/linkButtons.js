export default {
    name: 'link',
    title: 'Link',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'link',
            title: 'Link',
            type: 'string',
        }
    ]
}