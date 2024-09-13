

import { extendType, objectType } from "nexus";


export const Category = objectType({
    name: "Category",
    definition(t) {
        t.nonNull.int("id")
    },
})

export const CategoryQuery = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.list.field("categories", {
            type: "Category",
            resolve(parent, args, context, info){
                return context.prisma.category.findMany();
            }
        })
    },
})


// export const ContextMutation = extendType({
//     type: "Mutation",
//     definition(t) {
//         t.nonNull.field("addCategory", {
//             type: "Category",
//             args: {},
//             resolve(parent, args, context, info){
//                 return {}
//             }
//         })
//     },
// })