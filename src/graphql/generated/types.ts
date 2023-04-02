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

export type AddStoryInput = {
  mediaType: StoryMediaType;
};

export type Friend = {
  __typename?: 'Friend';
  _id: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  online: Scalars['Boolean'];
  picturePath?: Maybe<Scalars['String']>;
};

export enum Gender {
  Female = 'Female',
  Male = 'Male'
}

export type GetFriendsStoriesInput = {
  limit?: InputMaybe<Scalars['Int']>;
  page: Scalars['Int'];
};

export type GetPostsInput = {
  limit?: InputMaybe<Scalars['Int']>;
  page: Scalars['Int'];
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

export type LoginResponse = {
  __typename?: 'LoginResponse';
  token: Scalars['Token'];
  user: User;
};

export type LogoutResponse = {
  __typename?: 'LogoutResponse';
  message?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addStory: Scalars['String'];
  deletePost: Post;
  deleteStory: Story;
  login: LoginResponse;
  logout: LogoutResponse;
  register: Scalars['String'];
  storySeen: Scalars['String'];
  toggleLikePost: Scalars['String'];
};


export type MutationAddStoryArgs = {
  input: AddStoryInput;
};


export type MutationDeletePostArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteStoryArgs = {
  storyID: Scalars['ID'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationLogoutArgs = {
  id: Scalars['ID'];
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationStorySeenArgs = {
  storyID: Scalars['ID'];
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

export enum PostStatus {
  Active = 'active',
  Disabled = 'disabled',
  Pending = 'pending'
}

export type Query = {
  __typename?: 'Query';
  getFriendsStories: StoriesFriend;
  post: Post;
  posts: PostList;
};


export type QueryGetFriendsStoriesArgs = {
  input: GetFriendsStoriesInput;
};


export type QueryPostArgs = {
  id: Scalars['ID'];
};


export type QueryPostsArgs = {
  input: GetPostsInput;
};

export type RegisterInput = {
  birthDate: Scalars['Date'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender: Gender;
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export type StoriesFriend = Paginate & {
  __typename?: 'StoriesFriend';
  docs: Array<Maybe<UserStories>>;
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

export type Story = {
  __typename?: 'Story';
  _id: Scalars['ID'];
  content?: Maybe<StoryContent>;
  interactions?: Maybe<Array<Maybe<StoryInteractions>>>;
  status: StoryStatus;
};

export type StoryContent = {
  __typename?: 'StoryContent';
  media: StoryMediaType;
  mediaUrl?: Maybe<Scalars['String']>;
};

export type StoryInteractions = {
  __typename?: 'StoryInteractions';
  reactions?: Maybe<Array<Maybe<StoryInteractionsReactions>>>;
  userID: Scalars['ID'];
};

export enum StoryInteractionsReactions {
  Haha = 'haha',
  Like = 'like',
  Love = 'love'
}

export enum StoryMediaType {
  Picture = 'picture',
  Text = 'text',
  Video = 'video'
}

export enum StoryStatus {
  Active = 'active',
  Archived = 'archived',
  Disabled = 'disabled'
}

export type ToggleLikePostInput = {
  id: Scalars['ID'];
  reaction?: InputMaybe<LikeReaction>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  birthDate: Scalars['Date'];
  email: Scalars['Email'];
  firstName: Scalars['String'];
  friendsList: Array<Maybe<Friend>>;
  gender: Gender;
  lastName: Scalars['String'];
  location?: Maybe<Scalars['String']>;
  online: Scalars['Boolean'];
  picturePath?: Maybe<Scalars['String']>;
};

export type UserStories = {
  __typename?: 'UserStories';
  stories: Array<Maybe<Story>>;
  userID: Scalars['ID'];
};

export type LoginInput = {
  email: Scalars['Email'];
  password: Scalars['String'];
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', token: any, user: { __typename?: 'User', email: any, online: boolean, _id: string, firstName: string, lastName: string, picturePath?: string | null, friendsList: Array<{ __typename?: 'Friend', _id: string, firstName: string, lastName: string, online: boolean, picturePath?: string | null } | null> } } };

export type RegisterMutationVariables = Exact<{
  input: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: string };


export const LoginDocument = gql`
    mutation Login($input: loginInput!) {
  login(input: $input) {
    user {
      email
      online
      _id
      firstName
      lastName
      picturePath
      friendsList {
        _id
        firstName
        lastName
        online
        picturePath
      }
    }
    token
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
export const RegisterDocument = gql`
    mutation Register($input: RegisterInput!) {
  register(input: $input)
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;