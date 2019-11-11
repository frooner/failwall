/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateFailInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  rating: number,
};

export type UpdateFailInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  rating?: number | null,
};

export type DeleteFailInput = {
  id?: string | null,
};

export type ModelFailFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  rating?: ModelIntFilterInput | null,
  and?: Array< ModelFailFilterInput | null > | null,
  or?: Array< ModelFailFilterInput | null > | null,
  not?: ModelFailFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type CreateFailMutationVariables = {
  input: CreateFailInput,
};

export type CreateFailMutation = {
  createFail:  {
    __typename: "Fail",
    id: string,
    name: string,
    description: string | null,
    rating: number,
  } | null,
};

export type UpdateFailMutationVariables = {
  input: UpdateFailInput,
};

export type UpdateFailMutation = {
  updateFail:  {
    __typename: "Fail",
    id: string,
    name: string,
    description: string | null,
    rating: number,
  } | null,
};

export type DeleteFailMutationVariables = {
  input: DeleteFailInput,
};

export type DeleteFailMutation = {
  deleteFail:  {
    __typename: "Fail",
    id: string,
    name: string,
    description: string | null,
    rating: number,
  } | null,
};

export type GetFailQueryVariables = {
  id: string,
};

export type GetFailQuery = {
  getFail:  {
    __typename: "Fail",
    id: string,
    name: string,
    description: string | null,
    rating: number,
  } | null,
};

export type ListFailsQueryVariables = {
  filter?: ModelFailFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFailsQuery = {
  listFails:  {
    __typename: "ModelFailConnection",
    items:  Array< {
      __typename: "Fail",
      id: string,
      name: string,
      description: string | null,
      rating: number,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateFailSubscription = {
  onCreateFail:  {
    __typename: "Fail",
    id: string,
    name: string,
    description: string | null,
    rating: number,
  } | null,
};

export type OnUpdateFailSubscription = {
  onUpdateFail:  {
    __typename: "Fail",
    id: string,
    name: string,
    description: string | null,
    rating: number,
  } | null,
};

export type OnDeleteFailSubscription = {
  onDeleteFail:  {
    __typename: "Fail",
    id: string,
    name: string,
    description: string | null,
    rating: number,
  } | null,
};
