import prisma from "@/lib/prisma";

const Page = async () => {
    const posts = await prisma.post.findMany()

    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    I have {post.title}
                </div>
            ))}
        </div>
    )
}

export default Page