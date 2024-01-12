'use client';

export default function SideGuide({ post }: { post: PostData }) {
    return (
        <section className="md:w-72 w-full border-2 rounded-xl">
            <div className={"p-4"}>
                <h1>{post.title}</h1>
                <h2>{post.subtitle}</h2>
            </div>
        </section>
    );
}