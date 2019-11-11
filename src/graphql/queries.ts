// tslint:disable
// this is an auto generated file. This will be overwritten

export const getFail = `query GetFail($id: ID!) {
  getFail(id: $id) {
    id
    name
    description
    rating
  }
}
`;
export const listFails = `query ListFails(
  $filter: ModelFailFilterInput
  $limit: Int
  $nextToken: String
) {
  listFails(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      rating
    }
    nextToken
  }
}
`;
