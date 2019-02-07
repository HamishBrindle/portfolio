"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Color",
    embedded: false
  },
  {
    name: "ColorType",
    embedded: false
  },
  {
    name: "File",
    embedded: false
  },
  {
    name: "Image",
    embedded: false
  },
  {
    name: "Page",
    embedded: false
  },
  {
    name: "Project",
    embedded: false
  },
  {
    name: "ProjectImage",
    embedded: false
  },
  {
    name: "ProjectImageType",
    embedded: false
  },
  {
    name: "Shade",
    embedded: false
  },
  {
    name: "Shape",
    embedded: false
  },
  {
    name: "Style",
    embedded: false
  },
  {
    name: "Technology",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `${process.env["PRISMA_ENDPOINT"]}`,
  secret: `${process.env["PRISMA_SECRET"]}`
});
exports.prisma = new exports.Prisma();
