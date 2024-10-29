import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import validator from 'validator';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['Serializable']);

export const BookScalarFieldEnumSchema = z.enum(['title','name','coverurl','isbn','review']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const NullsOrderSchema = z.enum(['first','last']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// BOOK SCHEMA
/////////////////////////////////////////

export const BookSchema = z.object({
  title: z.string(),
  name: z.string(),
  coverurl: z.string().refine(v => validator.isURL(v), {message: "bad"}).nullable(),
  isbn: z.string().refine(v => validator.isISBN(v), {message: "bad"}),
  review: z.string().nullable(),
})

export type Book = z.infer<typeof BookSchema>

/////////////////////////////////////////
// BOOK CUSTOM VALIDATORS SCHEMA
/////////////////////////////////////////

export const BookCustomValidatorsSchema = BookSchema

export type BookCustomValidators = z.infer<typeof BookCustomValidatorsSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// BOOK
//------------------------------------------------------

export const BookSelectSchema: z.ZodType<Prisma.BookSelect> = z.object({
  title: z.boolean().optional(),
  name: z.boolean().optional(),
  coverurl: z.boolean().optional(),
  isbn: z.boolean().optional(),
  review: z.boolean().optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const BookWhereInputSchema: z.ZodType<Prisma.BookWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BookWhereInputSchema),z.lazy(() => BookWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BookWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BookWhereInputSchema),z.lazy(() => BookWhereInputSchema).array() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  coverurl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  isbn: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  review: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const BookOrderByWithRelationInputSchema: z.ZodType<Prisma.BookOrderByWithRelationInput> = z.object({
  title: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  coverurl: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  isbn: z.lazy(() => SortOrderSchema).optional(),
  review: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export const BookWhereUniqueInputSchema: z.ZodType<Prisma.BookWhereUniqueInput> = z.object({
  isbn: z.string().refine(v => validator.isISBN(v), {message: "bad"})
})
.and(z.object({
  isbn: z.string().refine(v => validator.isISBN(v), {message: "bad"}).optional(),
  AND: z.union([ z.lazy(() => BookWhereInputSchema),z.lazy(() => BookWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BookWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BookWhereInputSchema),z.lazy(() => BookWhereInputSchema).array() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  coverurl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string().refine(v => validator.isURL(v), {message: "bad"}) ]).optional().nullable(),
  review: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict());

export const BookOrderByWithAggregationInputSchema: z.ZodType<Prisma.BookOrderByWithAggregationInput> = z.object({
  title: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  coverurl: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  isbn: z.lazy(() => SortOrderSchema).optional(),
  review: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => BookCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BookMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BookMinOrderByAggregateInputSchema).optional()
}).strict();

export const BookScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BookScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => BookScalarWhereWithAggregatesInputSchema),z.lazy(() => BookScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BookScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BookScalarWhereWithAggregatesInputSchema),z.lazy(() => BookScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  coverurl: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  isbn: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  review: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const BookCreateInputSchema: z.ZodType<Prisma.BookCreateInput> = z.object({
  title: z.string(),
  name: z.string(),
  coverurl: z.string().refine(v => validator.isURL(v), {message: "bad"}).optional().nullable(),
  isbn: z.string().refine(v => validator.isISBN(v), {message: "bad"}),
  review: z.string().optional().nullable()
}).strict();

export const BookUncheckedCreateInputSchema: z.ZodType<Prisma.BookUncheckedCreateInput> = z.object({
  title: z.string(),
  name: z.string(),
  coverurl: z.string().refine(v => validator.isURL(v), {message: "bad"}).optional().nullable(),
  isbn: z.string().refine(v => validator.isISBN(v), {message: "bad"}),
  review: z.string().optional().nullable()
}).strict();

export const BookUpdateInputSchema: z.ZodType<Prisma.BookUpdateInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  coverurl: z.union([ z.string().refine(v => validator.isURL(v), {message: "bad"}),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isbn: z.union([ z.string().refine(v => validator.isISBN(v), {message: "bad"}),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  review: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const BookUncheckedUpdateInputSchema: z.ZodType<Prisma.BookUncheckedUpdateInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  coverurl: z.union([ z.string().refine(v => validator.isURL(v), {message: "bad"}),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isbn: z.union([ z.string().refine(v => validator.isISBN(v), {message: "bad"}),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  review: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const BookCreateManyInputSchema: z.ZodType<Prisma.BookCreateManyInput> = z.object({
  title: z.string(),
  name: z.string(),
  coverurl: z.string().refine(v => validator.isURL(v), {message: "bad"}).optional().nullable(),
  isbn: z.string().refine(v => validator.isISBN(v), {message: "bad"}),
  review: z.string().optional().nullable()
}).strict();

export const BookUpdateManyMutationInputSchema: z.ZodType<Prisma.BookUpdateManyMutationInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  coverurl: z.union([ z.string().refine(v => validator.isURL(v), {message: "bad"}),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isbn: z.union([ z.string().refine(v => validator.isISBN(v), {message: "bad"}),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  review: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const BookUncheckedUpdateManyInputSchema: z.ZodType<Prisma.BookUncheckedUpdateManyInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  coverurl: z.union([ z.string().refine(v => validator.isURL(v), {message: "bad"}),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isbn: z.union([ z.string().refine(v => validator.isISBN(v), {message: "bad"}),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  review: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const BookCountOrderByAggregateInputSchema: z.ZodType<Prisma.BookCountOrderByAggregateInput> = z.object({
  title: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  coverurl: z.lazy(() => SortOrderSchema).optional(),
  isbn: z.lazy(() => SortOrderSchema).optional(),
  review: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BookMaxOrderByAggregateInputSchema: z.ZodType<Prisma.BookMaxOrderByAggregateInput> = z.object({
  title: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  coverurl: z.lazy(() => SortOrderSchema).optional(),
  isbn: z.lazy(() => SortOrderSchema).optional(),
  review: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BookMinOrderByAggregateInputSchema: z.ZodType<Prisma.BookMinOrderByAggregateInput> = z.object({
  title: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  coverurl: z.lazy(() => SortOrderSchema).optional(),
  isbn: z.lazy(() => SortOrderSchema).optional(),
  review: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const BookFindFirstArgsSchema: z.ZodType<Prisma.BookFindFirstArgs> = z.object({
  select: BookSelectSchema.optional(),
  where: BookWhereInputSchema.optional(),
  orderBy: z.union([ BookOrderByWithRelationInputSchema.array(),BookOrderByWithRelationInputSchema ]).optional(),
  cursor: BookWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BookScalarFieldEnumSchema,BookScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const BookFindFirstOrThrowArgsSchema: z.ZodType<Prisma.BookFindFirstOrThrowArgs> = z.object({
  select: BookSelectSchema.optional(),
  where: BookWhereInputSchema.optional(),
  orderBy: z.union([ BookOrderByWithRelationInputSchema.array(),BookOrderByWithRelationInputSchema ]).optional(),
  cursor: BookWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BookScalarFieldEnumSchema,BookScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const BookFindManyArgsSchema: z.ZodType<Prisma.BookFindManyArgs> = z.object({
  select: BookSelectSchema.optional(),
  where: BookWhereInputSchema.optional(),
  orderBy: z.union([ BookOrderByWithRelationInputSchema.array(),BookOrderByWithRelationInputSchema ]).optional(),
  cursor: BookWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BookScalarFieldEnumSchema,BookScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const BookAggregateArgsSchema: z.ZodType<Prisma.BookAggregateArgs> = z.object({
  where: BookWhereInputSchema.optional(),
  orderBy: z.union([ BookOrderByWithRelationInputSchema.array(),BookOrderByWithRelationInputSchema ]).optional(),
  cursor: BookWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const BookGroupByArgsSchema: z.ZodType<Prisma.BookGroupByArgs> = z.object({
  where: BookWhereInputSchema.optional(),
  orderBy: z.union([ BookOrderByWithAggregationInputSchema.array(),BookOrderByWithAggregationInputSchema ]).optional(),
  by: BookScalarFieldEnumSchema.array(),
  having: BookScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const BookFindUniqueArgsSchema: z.ZodType<Prisma.BookFindUniqueArgs> = z.object({
  select: BookSelectSchema.optional(),
  where: BookWhereUniqueInputSchema,
}).strict() ;

export const BookFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.BookFindUniqueOrThrowArgs> = z.object({
  select: BookSelectSchema.optional(),
  where: BookWhereUniqueInputSchema,
}).strict() ;

export const BookCreateArgsSchema: z.ZodType<Prisma.BookCreateArgs> = z.object({
  select: BookSelectSchema.optional(),
  data: z.union([ BookCreateInputSchema,BookUncheckedCreateInputSchema ]),
}).strict() ;

export const BookUpsertArgsSchema: z.ZodType<Prisma.BookUpsertArgs> = z.object({
  select: BookSelectSchema.optional(),
  where: BookWhereUniqueInputSchema,
  create: z.union([ BookCreateInputSchema,BookUncheckedCreateInputSchema ]),
  update: z.union([ BookUpdateInputSchema,BookUncheckedUpdateInputSchema ]),
}).strict() ;

export const BookCreateManyArgsSchema: z.ZodType<Prisma.BookCreateManyArgs> = z.object({
  data: z.union([ BookCreateManyInputSchema,BookCreateManyInputSchema.array() ]),
}).strict() ;

export const BookCreateManyAndReturnArgsSchema: z.ZodType<Prisma.BookCreateManyAndReturnArgs> = z.object({
  data: z.union([ BookCreateManyInputSchema,BookCreateManyInputSchema.array() ]),
}).strict() ;

export const BookDeleteArgsSchema: z.ZodType<Prisma.BookDeleteArgs> = z.object({
  select: BookSelectSchema.optional(),
  where: BookWhereUniqueInputSchema,
}).strict() ;

export const BookUpdateArgsSchema: z.ZodType<Prisma.BookUpdateArgs> = z.object({
  select: BookSelectSchema.optional(),
  data: z.union([ BookUpdateInputSchema,BookUncheckedUpdateInputSchema ]),
  where: BookWhereUniqueInputSchema,
}).strict() ;

export const BookUpdateManyArgsSchema: z.ZodType<Prisma.BookUpdateManyArgs> = z.object({
  data: z.union([ BookUpdateManyMutationInputSchema,BookUncheckedUpdateManyInputSchema ]),
  where: BookWhereInputSchema.optional(),
}).strict() ;

export const BookDeleteManyArgsSchema: z.ZodType<Prisma.BookDeleteManyArgs> = z.object({
  where: BookWhereInputSchema.optional(),
}).strict() ;