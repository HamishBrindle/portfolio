module.exports = {
        typeDefs: /* GraphQL */ `type AggregateColor {
  count: Int!
}

type AggregatePage {
  count: Int!
}

type AggregateProject {
  count: Int!
}

type AggregateStyle {
  count: Int!
}

type AggregateTechnology {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Color {
  id: ID!
  shade: Shade!
  hex: String!
  rgb: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ColorConnection {
  pageInfo: PageInfo!
  edges: [ColorEdge]!
  aggregate: AggregateColor!
}

input ColorCreateInput {
  shade: Shade!
  hex: String!
  rgb: String
}

input ColorCreateManyInput {
  create: [ColorCreateInput!]
  connect: [ColorWhereUniqueInput!]
}

input ColorCreateOneInput {
  create: ColorCreateInput
  connect: ColorWhereUniqueInput
}

type ColorEdge {
  node: Color!
  cursor: String!
}

enum ColorOrderByInput {
  id_ASC
  id_DESC
  shade_ASC
  shade_DESC
  hex_ASC
  hex_DESC
  rgb_ASC
  rgb_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ColorPreviousValues {
  id: ID!
  shade: Shade!
  hex: String!
  rgb: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ColorSubscriptionPayload {
  mutation: MutationType!
  node: Color
  updatedFields: [String!]
  previousValues: ColorPreviousValues
}

input ColorSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ColorWhereInput
  AND: [ColorSubscriptionWhereInput!]
  OR: [ColorSubscriptionWhereInput!]
  NOT: [ColorSubscriptionWhereInput!]
}

input ColorUpdateDataInput {
  shade: Shade
  hex: String
  rgb: String
}

input ColorUpdateInput {
  shade: Shade
  hex: String
  rgb: String
}

input ColorUpdateManyInput {
  create: [ColorCreateInput!]
  delete: [ColorWhereUniqueInput!]
  connect: [ColorWhereUniqueInput!]
  disconnect: [ColorWhereUniqueInput!]
  update: [ColorUpdateWithWhereUniqueNestedInput!]
  upsert: [ColorUpsertWithWhereUniqueNestedInput!]
}

input ColorUpdateOneRequiredInput {
  create: ColorCreateInput
  update: ColorUpdateDataInput
  upsert: ColorUpsertNestedInput
  connect: ColorWhereUniqueInput
}

input ColorUpdateWithWhereUniqueNestedInput {
  where: ColorWhereUniqueInput!
  data: ColorUpdateDataInput!
}

input ColorUpsertNestedInput {
  update: ColorUpdateDataInput!
  create: ColorCreateInput!
}

input ColorUpsertWithWhereUniqueNestedInput {
  where: ColorWhereUniqueInput!
  update: ColorUpdateDataInput!
  create: ColorCreateInput!
}

input ColorWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  shade: Shade
  shade_not: Shade
  shade_in: [Shade!]
  shade_not_in: [Shade!]
  hex: String
  hex_not: String
  hex_in: [String!]
  hex_not_in: [String!]
  hex_lt: String
  hex_lte: String
  hex_gt: String
  hex_gte: String
  hex_contains: String
  hex_not_contains: String
  hex_starts_with: String
  hex_not_starts_with: String
  hex_ends_with: String
  hex_not_ends_with: String
  rgb: String
  rgb_not: String
  rgb_in: [String!]
  rgb_not_in: [String!]
  rgb_lt: String
  rgb_lte: String
  rgb_gt: String
  rgb_gte: String
  rgb_contains: String
  rgb_not_contains: String
  rgb_starts_with: String
  rgb_not_starts_with: String
  rgb_ends_with: String
  rgb_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ColorWhereInput!]
  OR: [ColorWhereInput!]
  NOT: [ColorWhereInput!]
}

input ColorWhereUniqueInput {
  id: ID
}

scalar DateTime

scalar Long

type Mutation {
  createColor(data: ColorCreateInput!): Color!
  updateColor(data: ColorUpdateInput!, where: ColorWhereUniqueInput!): Color
  updateManyColors(data: ColorUpdateInput!, where: ColorWhereInput): BatchPayload!
  upsertColor(where: ColorWhereUniqueInput!, create: ColorCreateInput!, update: ColorUpdateInput!): Color!
  deleteColor(where: ColorWhereUniqueInput!): Color
  deleteManyColors(where: ColorWhereInput): BatchPayload!
  createPage(data: PageCreateInput!): Page!
  updatePage(data: PageUpdateInput!, where: PageWhereUniqueInput!): Page
  updateManyPages(data: PageUpdateInput!, where: PageWhereInput): BatchPayload!
  upsertPage(where: PageWhereUniqueInput!, create: PageCreateInput!, update: PageUpdateInput!): Page!
  deletePage(where: PageWhereUniqueInput!): Page
  deleteManyPages(where: PageWhereInput): BatchPayload!
  createProject(data: ProjectCreateInput!): Project!
  updateProject(data: ProjectUpdateInput!, where: ProjectWhereUniqueInput!): Project
  updateManyProjects(data: ProjectUpdateInput!, where: ProjectWhereInput): BatchPayload!
  upsertProject(where: ProjectWhereUniqueInput!, create: ProjectCreateInput!, update: ProjectUpdateInput!): Project!
  deleteProject(where: ProjectWhereUniqueInput!): Project
  deleteManyProjects(where: ProjectWhereInput): BatchPayload!
  createStyle(data: StyleCreateInput!): Style!
  updateStyle(data: StyleUpdateInput!, where: StyleWhereUniqueInput!): Style
  updateManyStyles(data: StyleUpdateInput!, where: StyleWhereInput): BatchPayload!
  upsertStyle(where: StyleWhereUniqueInput!, create: StyleCreateInput!, update: StyleUpdateInput!): Style!
  deleteStyle(where: StyleWhereUniqueInput!): Style
  deleteManyStyles(where: StyleWhereInput): BatchPayload!
  createTechnology(data: TechnologyCreateInput!): Technology!
  updateTechnology(data: TechnologyUpdateInput!, where: TechnologyWhereUniqueInput!): Technology
  updateManyTechnologies(data: TechnologyUpdateInput!, where: TechnologyWhereInput): BatchPayload!
  upsertTechnology(where: TechnologyWhereUniqueInput!, create: TechnologyCreateInput!, update: TechnologyUpdateInput!): Technology!
  deleteTechnology(where: TechnologyWhereUniqueInput!): Technology
  deleteManyTechnologies(where: TechnologyWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Page {
  id: ID!
  name: String!
  title: String!
  subTitle: String
  slug: String!
  project: Project
  isPublished: Boolean!
  style: Style
  createdAt: DateTime!
  updatedAt: DateTime!
}

type PageConnection {
  pageInfo: PageInfo!
  edges: [PageEdge]!
  aggregate: AggregatePage!
}

input PageCreateInput {
  name: String!
  title: String!
  subTitle: String
  slug: String!
  project: ProjectCreateOneWithoutPageInput
  isPublished: Boolean
  style: StyleCreateOneInput
}

input PageCreateOneWithoutProjectInput {
  create: PageCreateWithoutProjectInput
  connect: PageWhereUniqueInput
}

input PageCreateWithoutProjectInput {
  name: String!
  title: String!
  subTitle: String
  slug: String!
  isPublished: Boolean
  style: StyleCreateOneInput
}

type PageEdge {
  node: Page!
  cursor: String!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

enum PageOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  title_ASC
  title_DESC
  subTitle_ASC
  subTitle_DESC
  slug_ASC
  slug_DESC
  isPublished_ASC
  isPublished_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PagePreviousValues {
  id: ID!
  name: String!
  title: String!
  subTitle: String
  slug: String!
  isPublished: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type PageSubscriptionPayload {
  mutation: MutationType!
  node: Page
  updatedFields: [String!]
  previousValues: PagePreviousValues
}

input PageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PageWhereInput
  AND: [PageSubscriptionWhereInput!]
  OR: [PageSubscriptionWhereInput!]
  NOT: [PageSubscriptionWhereInput!]
}

input PageUpdateInput {
  name: String
  title: String
  subTitle: String
  slug: String
  project: ProjectUpdateOneWithoutPageInput
  isPublished: Boolean
  style: StyleUpdateOneInput
}

input PageUpdateOneWithoutProjectInput {
  create: PageCreateWithoutProjectInput
  update: PageUpdateWithoutProjectDataInput
  upsert: PageUpsertWithoutProjectInput
  delete: Boolean
  disconnect: Boolean
  connect: PageWhereUniqueInput
}

input PageUpdateWithoutProjectDataInput {
  name: String
  title: String
  subTitle: String
  slug: String
  isPublished: Boolean
  style: StyleUpdateOneInput
}

input PageUpsertWithoutProjectInput {
  update: PageUpdateWithoutProjectDataInput!
  create: PageCreateWithoutProjectInput!
}

input PageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  subTitle: String
  subTitle_not: String
  subTitle_in: [String!]
  subTitle_not_in: [String!]
  subTitle_lt: String
  subTitle_lte: String
  subTitle_gt: String
  subTitle_gte: String
  subTitle_contains: String
  subTitle_not_contains: String
  subTitle_starts_with: String
  subTitle_not_starts_with: String
  subTitle_ends_with: String
  subTitle_not_ends_with: String
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  project: ProjectWhereInput
  isPublished: Boolean
  isPublished_not: Boolean
  style: StyleWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [PageWhereInput!]
  OR: [PageWhereInput!]
  NOT: [PageWhereInput!]
}

input PageWhereUniqueInput {
  id: ID
}

type Project {
  id: ID!
  name: String!
  description: String!
  page: Page
  image: String
  imageLarge: String
  imagePlaceholder: String
  styleSet: Style
  startDate: DateTime
  finishDate: DateTime
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ProjectConnection {
  pageInfo: PageInfo!
  edges: [ProjectEdge]!
  aggregate: AggregateProject!
}

input ProjectCreateInput {
  name: String!
  description: String!
  page: PageCreateOneWithoutProjectInput
  image: String
  imageLarge: String
  imagePlaceholder: String
  styleSet: StyleCreateOneInput
  startDate: DateTime
  finishDate: DateTime
}

input ProjectCreateOneWithoutPageInput {
  create: ProjectCreateWithoutPageInput
  connect: ProjectWhereUniqueInput
}

input ProjectCreateWithoutPageInput {
  name: String!
  description: String!
  image: String
  imageLarge: String
  imagePlaceholder: String
  styleSet: StyleCreateOneInput
  startDate: DateTime
  finishDate: DateTime
}

type ProjectEdge {
  node: Project!
  cursor: String!
}

enum ProjectOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  image_ASC
  image_DESC
  imageLarge_ASC
  imageLarge_DESC
  imagePlaceholder_ASC
  imagePlaceholder_DESC
  startDate_ASC
  startDate_DESC
  finishDate_ASC
  finishDate_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProjectPreviousValues {
  id: ID!
  name: String!
  description: String!
  image: String
  imageLarge: String
  imagePlaceholder: String
  startDate: DateTime
  finishDate: DateTime
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ProjectSubscriptionPayload {
  mutation: MutationType!
  node: Project
  updatedFields: [String!]
  previousValues: ProjectPreviousValues
}

input ProjectSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProjectWhereInput
  AND: [ProjectSubscriptionWhereInput!]
  OR: [ProjectSubscriptionWhereInput!]
  NOT: [ProjectSubscriptionWhereInput!]
}

input ProjectUpdateInput {
  name: String
  description: String
  page: PageUpdateOneWithoutProjectInput
  image: String
  imageLarge: String
  imagePlaceholder: String
  styleSet: StyleUpdateOneInput
  startDate: DateTime
  finishDate: DateTime
}

input ProjectUpdateOneWithoutPageInput {
  create: ProjectCreateWithoutPageInput
  update: ProjectUpdateWithoutPageDataInput
  upsert: ProjectUpsertWithoutPageInput
  delete: Boolean
  disconnect: Boolean
  connect: ProjectWhereUniqueInput
}

input ProjectUpdateWithoutPageDataInput {
  name: String
  description: String
  image: String
  imageLarge: String
  imagePlaceholder: String
  styleSet: StyleUpdateOneInput
  startDate: DateTime
  finishDate: DateTime
}

input ProjectUpsertWithoutPageInput {
  update: ProjectUpdateWithoutPageDataInput!
  create: ProjectCreateWithoutPageInput!
}

input ProjectWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  page: PageWhereInput
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  imageLarge: String
  imageLarge_not: String
  imageLarge_in: [String!]
  imageLarge_not_in: [String!]
  imageLarge_lt: String
  imageLarge_lte: String
  imageLarge_gt: String
  imageLarge_gte: String
  imageLarge_contains: String
  imageLarge_not_contains: String
  imageLarge_starts_with: String
  imageLarge_not_starts_with: String
  imageLarge_ends_with: String
  imageLarge_not_ends_with: String
  imagePlaceholder: String
  imagePlaceholder_not: String
  imagePlaceholder_in: [String!]
  imagePlaceholder_not_in: [String!]
  imagePlaceholder_lt: String
  imagePlaceholder_lte: String
  imagePlaceholder_gt: String
  imagePlaceholder_gte: String
  imagePlaceholder_contains: String
  imagePlaceholder_not_contains: String
  imagePlaceholder_starts_with: String
  imagePlaceholder_not_starts_with: String
  imagePlaceholder_ends_with: String
  imagePlaceholder_not_ends_with: String
  styleSet: StyleWhereInput
  startDate: DateTime
  startDate_not: DateTime
  startDate_in: [DateTime!]
  startDate_not_in: [DateTime!]
  startDate_lt: DateTime
  startDate_lte: DateTime
  startDate_gt: DateTime
  startDate_gte: DateTime
  finishDate: DateTime
  finishDate_not: DateTime
  finishDate_in: [DateTime!]
  finishDate_not_in: [DateTime!]
  finishDate_lt: DateTime
  finishDate_lte: DateTime
  finishDate_gt: DateTime
  finishDate_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ProjectWhereInput!]
  OR: [ProjectWhereInput!]
  NOT: [ProjectWhereInput!]
}

input ProjectWhereUniqueInput {
  id: ID
}

type Query {
  color(where: ColorWhereUniqueInput!): Color
  colors(where: ColorWhereInput, orderBy: ColorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Color]!
  colorsConnection(where: ColorWhereInput, orderBy: ColorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ColorConnection!
  page(where: PageWhereUniqueInput!): Page
  pages(where: PageWhereInput, orderBy: PageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Page]!
  pagesConnection(where: PageWhereInput, orderBy: PageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PageConnection!
  project(where: ProjectWhereUniqueInput!): Project
  projects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project]!
  projectsConnection(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProjectConnection!
  style(where: StyleWhereUniqueInput!): Style
  styles(where: StyleWhereInput, orderBy: StyleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Style]!
  stylesConnection(where: StyleWhereInput, orderBy: StyleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StyleConnection!
  technology(where: TechnologyWhereUniqueInput!): Technology
  technologies(where: TechnologyWhereInput, orderBy: TechnologyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Technology]!
  technologiesConnection(where: TechnologyWhereInput, orderBy: TechnologyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TechnologyConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

enum Shade {
  LIGHT
  DARK
}

enum Shape {
  JAGGED
  ROUND
  SQUARE
}

type Style {
  id: ID!
  colors(where: ColorWhereInput, orderBy: ColorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Color!]
  style: Shape!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type StyleConnection {
  pageInfo: PageInfo!
  edges: [StyleEdge]!
  aggregate: AggregateStyle!
}

input StyleCreateInput {
  colors: ColorCreateManyInput
  style: Shape
}

input StyleCreateOneInput {
  create: StyleCreateInput
  connect: StyleWhereUniqueInput
}

type StyleEdge {
  node: Style!
  cursor: String!
}

enum StyleOrderByInput {
  id_ASC
  id_DESC
  style_ASC
  style_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type StylePreviousValues {
  id: ID!
  style: Shape!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type StyleSubscriptionPayload {
  mutation: MutationType!
  node: Style
  updatedFields: [String!]
  previousValues: StylePreviousValues
}

input StyleSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StyleWhereInput
  AND: [StyleSubscriptionWhereInput!]
  OR: [StyleSubscriptionWhereInput!]
  NOT: [StyleSubscriptionWhereInput!]
}

input StyleUpdateDataInput {
  colors: ColorUpdateManyInput
  style: Shape
}

input StyleUpdateInput {
  colors: ColorUpdateManyInput
  style: Shape
}

input StyleUpdateOneInput {
  create: StyleCreateInput
  update: StyleUpdateDataInput
  upsert: StyleUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: StyleWhereUniqueInput
}

input StyleUpsertNestedInput {
  update: StyleUpdateDataInput!
  create: StyleCreateInput!
}

input StyleWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  colors_every: ColorWhereInput
  colors_some: ColorWhereInput
  colors_none: ColorWhereInput
  style: Shape
  style_not: Shape
  style_in: [Shape!]
  style_not_in: [Shape!]
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [StyleWhereInput!]
  OR: [StyleWhereInput!]
  NOT: [StyleWhereInput!]
}

input StyleWhereUniqueInput {
  id: ID
}

type Subscription {
  color(where: ColorSubscriptionWhereInput): ColorSubscriptionPayload
  page(where: PageSubscriptionWhereInput): PageSubscriptionPayload
  project(where: ProjectSubscriptionWhereInput): ProjectSubscriptionPayload
  style(where: StyleSubscriptionWhereInput): StyleSubscriptionPayload
  technology(where: TechnologySubscriptionWhereInput): TechnologySubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Technology {
  id: ID!
  name: String!
  image: String!
  color: Color!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type TechnologyConnection {
  pageInfo: PageInfo!
  edges: [TechnologyEdge]!
  aggregate: AggregateTechnology!
}

input TechnologyCreateInput {
  name: String!
  image: String!
  color: ColorCreateOneInput!
}

type TechnologyEdge {
  node: Technology!
  cursor: String!
}

enum TechnologyOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  image_ASC
  image_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TechnologyPreviousValues {
  id: ID!
  name: String!
  image: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type TechnologySubscriptionPayload {
  mutation: MutationType!
  node: Technology
  updatedFields: [String!]
  previousValues: TechnologyPreviousValues
}

input TechnologySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TechnologyWhereInput
  AND: [TechnologySubscriptionWhereInput!]
  OR: [TechnologySubscriptionWhereInput!]
  NOT: [TechnologySubscriptionWhereInput!]
}

input TechnologyUpdateInput {
  name: String
  image: String
  color: ColorUpdateOneRequiredInput
}

input TechnologyWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  color: ColorWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [TechnologyWhereInput!]
  OR: [TechnologyWhereInput!]
  NOT: [TechnologyWhereInput!]
}

input TechnologyWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  name: String!
  email: String!
  nickname: String
  lastLoggedIn: DateTime
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  nickname: String
  lastLoggedIn: DateTime
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  nickname_ASC
  nickname_DESC
  lastLoggedIn_ASC
  lastLoggedIn_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  nickname: String
  lastLoggedIn: DateTime
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  nickname: String
  lastLoggedIn: DateTime
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  nickname: String
  nickname_not: String
  nickname_in: [String!]
  nickname_not_in: [String!]
  nickname_lt: String
  nickname_lte: String
  nickname_gt: String
  nickname_gte: String
  nickname_contains: String
  nickname_not_contains: String
  nickname_starts_with: String
  nickname_not_starts_with: String
  nickname_ends_with: String
  nickname_not_ends_with: String
  lastLoggedIn: DateTime
  lastLoggedIn_not: DateTime
  lastLoggedIn_in: [DateTime!]
  lastLoggedIn_not_in: [DateTime!]
  lastLoggedIn_lt: DateTime
  lastLoggedIn_lte: DateTime
  lastLoggedIn_gt: DateTime
  lastLoggedIn_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    