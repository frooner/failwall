/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateFailInput = {
  id?: string | null;
  name: string;
  description?: string | null;
  rating: number;
};

export type UpdateFailInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  rating?: number | null;
};

export type DeleteFailInput = {
  id?: string | null;
};

export type ModelFailFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  description?: ModelStringFilterInput | null;
  rating?: ModelIntFilterInput | null;
  and?: Array<ModelFailFilterInput | null> | null;
  or?: Array<ModelFailFilterInput | null> | null;
  not?: ModelFailFilterInput | null;
};

export type ModelIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelIntFilterInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  contains?: number | null;
  notContains?: number | null;
  between?: Array<number | null> | null;
};

export type CreateFailMutation = {
  __typename: "Fail";
  id: string;
  name: string;
  description: string | null;
  rating: number;
};

export type UpdateFailMutation = {
  __typename: "Fail";
  id: string;
  name: string;
  description: string | null;
  rating: number;
};

export type DeleteFailMutation = {
  __typename: "Fail";
  id: string;
  name: string;
  description: string | null;
  rating: number;
};

export type GetFailQuery = {
  __typename: "Fail";
  id: string;
  name: string;
  description: string | null;
  rating: number;
};

export type ListFailsQuery = {
  __typename: "ModelFailConnection";
  items: Array<{
    __typename: "Fail";
    id: string;
    name: string;
    description: string | null;
    rating: number;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateFailSubscription = {
  __typename: "Fail";
  id: string;
  name: string;
  description: string | null;
  rating: number;
};

export type OnUpdateFailSubscription = {
  __typename: "Fail";
  id: string;
  name: string;
  description: string | null;
  rating: number;
};

export type OnDeleteFailSubscription = {
  __typename: "Fail";
  id: string;
  name: string;
  description: string | null;
  rating: number;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateFail(input: CreateFailInput): Promise<CreateFailMutation> {
    const statement = `mutation CreateFail($input: CreateFailInput!) {
        createFail(input: $input) {
          __typename
          id
          name
          description
          rating
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateFailMutation>response.data.createFail;
  }
  async UpdateFail(input: UpdateFailInput): Promise<UpdateFailMutation> {
    const statement = `mutation UpdateFail($input: UpdateFailInput!) {
        updateFail(input: $input) {
          __typename
          id
          name
          description
          rating
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateFailMutation>response.data.updateFail;
  }
  async DeleteFail(input: DeleteFailInput): Promise<DeleteFailMutation> {
    const statement = `mutation DeleteFail($input: DeleteFailInput!) {
        deleteFail(input: $input) {
          __typename
          id
          name
          description
          rating
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteFailMutation>response.data.deleteFail;
  }
  async GetFail(id: string): Promise<GetFailQuery> {
    const statement = `query GetFail($id: ID!) {
        getFail(id: $id) {
          __typename
          id
          name
          description
          rating
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetFailQuery>response.data.getFail;
  }
  async ListFails(
    filter?: ModelFailFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListFailsQuery> {
    const statement = `query ListFails($filter: ModelFailFilterInput, $limit: Int, $nextToken: String) {
        listFails(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            rating
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListFailsQuery>response.data.listFails;
  }
  OnCreateFailListener: Observable<OnCreateFailSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateFail {
        onCreateFail {
          __typename
          id
          name
          description
          rating
        }
      }`
    )
  ) as Observable<OnCreateFailSubscription>;

  OnUpdateFailListener: Observable<OnUpdateFailSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateFail {
        onUpdateFail {
          __typename
          id
          name
          description
          rating
        }
      }`
    )
  ) as Observable<OnUpdateFailSubscription>;

  OnDeleteFailListener: Observable<OnDeleteFailSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteFail {
        onDeleteFail {
          __typename
          id
          name
          description
          rating
        }
      }`
    )
  ) as Observable<OnDeleteFailSubscription>;
}
