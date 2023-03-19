import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Email: any;
  Token: any;
};

export type BadRequestError = Error & {
  __typename?: 'BadRequestError';
  code: Scalars['Int'];
  message: Scalars['String'];
  messages?: Maybe<Array<ErrorMessagesType>>;
  name: ErrorName;
};

export type Error = {
  code: Scalars['Int'];
  message: Scalars['String'];
  messages?: Maybe<Array<ErrorMessagesType>>;
  name: ErrorName;
};

export type ErrorMessagesType = {
  __typename?: 'ErrorMessagesType';
  field: Scalars['String'];
  message: Scalars['String'];
};

export enum ErrorName {
  Badrequest = 'BADREQUEST',
  Forbidden = 'FORBIDDEN',
  Internalservererror = 'INTERNALSERVERERROR',
  Unauthorized = 'UNAUTHORIZED'
}

export type ForbiddenError = Error & {
  __typename?: 'ForbiddenError';
  code: Scalars['Int'];
  message: Scalars['String'];
  messages?: Maybe<Array<ErrorMessagesType>>;
  name: ErrorName;
};

export type GetPostsInput = {
  limit?: InputMaybe<Scalars['Int']>;
  page: Scalars['Int'];
};

export type InternalServerError = Error & {
  __typename?: 'InternalServerError';
  code: Scalars['Int'];
  message: Scalars['String'];
  messages?: Maybe<Array<ErrorMessagesType>>;
  name: ErrorName;
};

export enum LikeReaction {
  Haha = 'haha',
  Like = 'like',
  Love = 'love'
}

export type Likes = {
  __typename?: 'Likes';
  reaction: LikeReaction;
  userID: Scalars['ID'];
};

export type LoginData = {
  __typename?: 'LoginData';
  token: Scalars['Token'];
  user: User;
};

export type LoginResponse = BadRequestError | InternalServerError | LoginData;

export type Logout = {
  __typename?: 'Logout';
  message?: Maybe<Scalars['String']>;
};

export type LogoutResponse = ForbiddenError | InternalServerError | Logout;

export type Mutation = {
  __typename?: 'Mutation';
  deletePost: PostRespose;
  login: LoginResponse;
  logout: LogoutResponse;
  toggleLikePost: ToogleLikeResponse;
};


export type MutationDeletePostArgs = {
  id: Scalars['ID'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationLogoutArgs = {
  id: Scalars['ID'];
};


export type MutationToggleLikePostArgs = {
  input: ToggleLikePostInput;
};

export type Paginate = {
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  offset: Scalars['Int'];
  page?: Maybe<Scalars['Int']>;
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type Post = {
  __typename?: 'Post';
  _id: Scalars['ID'];
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  level: PostLevel;
  likes: Array<Maybe<Likes>>;
  picturePath?: Maybe<Scalars['String']>;
  status: PostStatus;
  updatedAt: Scalars['Date'];
  userID: Scalars['ID'];
};

export enum PostLevel {
  First = 'first',
  Second = 'second',
  Third = 'third'
}

export type PostList = Paginate & {
  __typename?: 'PostList';
  docs: Array<Maybe<Post>>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage: Scalars['Int'];
  offset: Scalars['Int'];
  page?: Maybe<Scalars['Int']>;
  pagingCounter: Scalars['Int'];
  prevPage: Scalars['Int'];
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type PostRespose = BadRequestError | InternalServerError | Post;

export enum PostStatus {
  Active = 'active',
  Disabled = 'disabled',
  Pending = 'pending'
}

export type PostsRespose = InternalServerError | PostList;

export type Query = {
  __typename?: 'Query';
  post: PostRespose;
  posts: PostsRespose;
};


export type QueryPostArgs = {
  id: Scalars['ID'];
};


export type QueryPostsArgs = {
  input: GetPostsInput;
};

export type ToggleLike = {
  __typename?: 'ToggleLike';
  message?: Maybe<Scalars['String']>;
};

export type ToggleLikePostInput = {
  id: Scalars['ID'];
  reaction?: InputMaybe<LikeReaction>;
};

export type ToogleLikeResponse = BadRequestError | InternalServerError | ToggleLike;

export type UnauthorizedError = Error & {
  __typename?: 'UnauthorizedError';
  code: Scalars['Int'];
  message: Scalars['String'];
  messages?: Maybe<Array<ErrorMessagesType>>;
  name: ErrorName;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  email: Scalars['Email'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  location?: Maybe<Scalars['String']>;
  occupation?: Maybe<Scalars['String']>;
  online: Scalars['Boolean'];
  picturePath?: Maybe<Scalars['String']>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'BadRequestError', message: string, name: ErrorName, code: number, messages?: Array<{ __typename?: 'ErrorMessagesType', field: string, message: string }> | null } | { __typename?: 'InternalServerError', message: string, name: ErrorName, code: number, messages?: Array<{ __typename?: 'ErrorMessagesType', field: string, message: string }> | null } | { __typename?: 'LoginData', token: any, user: { __typename?: 'User', email: any, online: boolean, _id: string, firstName: string, lastName: string, picturePath?: string | null } } };


export const LoginDocument = gql`
    mutation Login($input: loginInput!) {
  login(input: $input) {
    ... on LoginData {
      user {
        email
        online
        _id
        firstName
        lastName
        picturePath
      }
      token
    }
    ... on BadRequestError {
      message
      name
      code
      messages {
        field
        message
      }
    }
    ... on InternalServerError {
      message
      name
      code
      messages {
        field
        message
      }
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;