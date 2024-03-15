export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields:[
        {
            name: 'title',
            type: 'string',
            title: 'Title of blog article',
        },
        {
            name: 'createdAt',
            title: 'Created At',
            type: 'datetime',
            options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm',
                calendarTodayLabel: 'Today'
            },

        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug of your blog article',
            options: {
                source: 'createdAt',
                slugify: (input:string) => {
                    const date = new Date(input);
                    // 타임스탬프를 기반으로 고유한 숫자를 생성합니다.
                    return `post-${date.getTime()}`;
                  }
            }
        },
        {
            name: 'titleImage',
            type: 'image',
            title: 'Title Image',
        },
        {
            name: 'smallDescription',
            type: 'text',
            title: 'Small Description',
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                {
                    type: 'block',
                }
            ]
        },
    ]
}