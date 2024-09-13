// model Event {
//     id            Int         @id @default(autoincrement())
//     subcategory   SubCategory @relation(fields: [subcategoryId], references: [id])
//     subcategoryId Int
//     name          String
//     date          DateTime
//     location      Location    @relation(fields: [locationId], references: [id])
//     locationId    Int
//     ticketFee     Int
//   }


import { extendType, intArg, nonNull, objectType, stringArg } from "nexus";



export const Event = objectType({
    name: "Events",
    definition(t) {
        t.nonNull.int("id");
        t.nonNull.string("name")
        t.nonNull.string("date")
        t.nonNull.int("ticketFee")
        t.nonNull.field("location", {
            type: "Location",
            
                resolve(parent, args, context, info){
                    return context.prisma.event.findUnique({where:{id:parent.id}}).location();
                }
            
        })
    },
})


export const EventQuery = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.list.field("events", {
            type: "Events",
            resolve(parent, args, context, info){
                return context.prisma.event.findMany();
            }
        })
    },
})

export const EventMutation = extendType({
    type: "Mutation",
    definition(t) {
        t.nonNull.field("addEvent", {
            type: "Events",
            args: {
                name: nonNull(stringArg()),
                date: nonNull(stringArg()),
                ticketFee: nonNull(intArg()),
                location: nonNull(stringArg())
            },
           async resolve(parent, args, context, info){
                const location = await context.prisma.location.findFirst({where: {name: args.location}});
                return await context.prisma.event.create({data: {...args, subcategory:"you"}}) as any;
            }
        })
    },
})