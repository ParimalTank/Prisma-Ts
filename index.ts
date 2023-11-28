import { Prisma, PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

async function main() {
    // Prisma Queries

    // Create User 

    // const user = await prisma.user.create({
    //     data: {
    //         name: 'John 123',
    //         email: 'john@gmail.com'
    //     },
    // });

    // console.log("User Created Successfully", user)


    // Get All User

    // const users = await prisma.user.findMany({
    //     include: {
    //         articles: true
    //     }
    // });
    // console.log("users: ", users);

    // Create article and associate it with user
    // const article = await prisma.article.create({
    //     data: {
    //         title: "Johns First Article",
    //         body: "This is Johns first article",
    //         author: {
    //             connect: {
    //                 id: 1
    //             }
    //         }
    //     }
    // })


    // Get all articles
    const articles = await prisma.article.findMany();


    // Create user and article and associate them
    // const user = await prisma.user.create({
    //     data: {
    //         name: 'Sara Smith',
    //         email: 'saras@gmail.com',
    //         articles: {
    //             create: {
    //                 title: 'Saras First Articles',
    //                 body: "This is saras first articles"
    //             }
    //         }
    //     }
    // })

    // Create another article 
    // const article = await prisma.article.create({
    //     data: {
    //         title: "Sample Article",
    //         body: "This is a sample article",
    //         author: {
    //             connect: {
    //                 id: 2
    //             }
    //         }
    //     }
    // })

    // console.log("users", article);

    // Loop over Saras articles
    // users.forEach((user) => {
    //     console.log(`User: ${user.name} , Email: ${user.email}`);
    //     console.log('Articles');

    //     user.articles.forEach((article) => {
    //         console.log(`- Title: ${article.title}, Body: ${article.body}`);
    //     })
    //     console.log('\n');
    // })

    // update data
    // const user = await prisma.user.update({
    //     where: {
    //         id: 1
    //     },
    //     data: {
    //         name: 'John Deo Jr.'
    //     }
    // })

    // Remove data
    // const article = await prisma.article.delete({
    //     where: {
    //         id: 2
    //     }
    // })

    console.log(articles)
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.log(e);
        await prisma.$disconnect();
        process.exit(1);
    })