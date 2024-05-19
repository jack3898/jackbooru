/* eslint-disable */
// @ts-nocheck

/**
 * ⚠️ THIS FILE HAS BEEN GENERATED BY A CODE GENERATOR.
 *
 * YOU SHOULD NOT MAKE CHANGES TO THIS FILE.
 */

import { gql } from '@apollo/client';
import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type File = {
  __typename?: 'File';
  id: Scalars['ID']['output'];
  user: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  files: Array<File>;
  users: Array<User>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['Date']['output'];
  updatedAt: Scalars['Date']['output'];
  username: Scalars['String']['output'];
};

export type FilesQueryVariables = Exact<{ [key: string]: never; }>;


export type FilesQuery = { __typename?: 'Query', files: Array<{ __typename?: 'File', id: string, user: string }> };


export const FilesDocument = gql`
    query Files {
  files {
    id
    user
  }
}
    `;
export type FilesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<FilesQuery, FilesQueryVariables>, 'query'>;

    export const FilesComponent = (props: FilesComponentProps) => (
      <ApolloReactComponents.Query<FilesQuery, FilesQueryVariables> query={FilesDocument} {...props} />
    );
    

/**
 * __useFilesQuery__
 *
 * To run a query within a React component, call `useFilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilesQuery({
 *   variables: {
 *   },
 * });
 */
export function useFilesQuery(baseOptions?: Apollo.QueryHookOptions<FilesQuery, FilesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FilesQuery, FilesQueryVariables>(FilesDocument, options);
      }
export function useFilesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FilesQuery, FilesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FilesQuery, FilesQueryVariables>(FilesDocument, options);
        }
export function useFilesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FilesQuery, FilesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FilesQuery, FilesQueryVariables>(FilesDocument, options);
        }
export type FilesQueryHookResult = ReturnType<typeof useFilesQuery>;
export type FilesLazyQueryHookResult = ReturnType<typeof useFilesLazyQuery>;
export type FilesSuspenseQueryHookResult = ReturnType<typeof useFilesSuspenseQuery>;
export type FilesQueryResult = Apollo.QueryResult<FilesQuery, FilesQueryVariables>;