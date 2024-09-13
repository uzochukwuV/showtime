import { extendType, nonNull, objectType, stringArg } from "nexus";


export const Location = objectType({
    name: "Location",
    definition(t) {
        t.nonNull.int("id"),
        t.nonNull.string("name")
    },
})


export const LocationQuery = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.list.field("locations", {
            type: "Location",
            resolve(parent, args, context, info){
                return context.prisma.location.findMany();
            }
        })
    },
})

export const LocationMutatiojn = extendType({
    type: "Mutation",
    definition(t) {
        t.nonNull.field("addLocation", {
            type:"Location",
            args: {
                name: nonNull(stringArg()),

            },
            resolve(parent, args, context, info){
                return context.prisma.location.create({data: {name: args.name}});
            }
        })
    },
})