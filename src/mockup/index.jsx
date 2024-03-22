

const posts = [
    {
        id: 1,
        author: {
            avataUrl: "https://avatars.githubusercontent.com/u/70951606?v=4",
            name: "AmiltonXavier",
            role: "Web Developer",
        },
        content: [

            { id: 1, type: "paragraph", content: "Fala galeraa 👋" },
            { id: 2, type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
            { id: 3, type: "link", content: "👉jane.design/doctorcare" },

        ],
        publishedAt: new Date("2024-02-04 12:07:20")
    },
    {
        id: 2,
        author: {
            avataUrl: "https://avatars.githubusercontent.com/u/70951606?v=4",
            name: "Dev Frustrado",
            role: "Desktop Developer",
        },
        content: [

            { id: 1, type: "paragraph", content: "Fala galeraa 👋" },
            { id: 2, type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
            { id: 3, type: "link", content: "👉jane.design/doctorcare" },

        ],
        publishedAt: new Date("2024-03-18 17:07:08")
    }
]

export const MOCKUP = {
    posts
}