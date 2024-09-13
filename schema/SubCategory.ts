import { extendType, objectType } from "nexus";


export const SubCategory = objectType({
    name: "SubCategory",
    definition(t) {
        t.nonNull.int("id");
    },
})


export const SubCategoryQuery = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.list.field("subcategories", {
            type: "SubCategory",
            resolve(parent, args, context, info){
                return context.prisma.subCategory.findMany();
            }
        })
    },
})