import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation RegisterUser(
    $username: String!
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
    $role: String
  ) {
    registerUser(
      username: $username
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
      role: $role
    ) {
      token
      user {
        _id
        username
        email
        firstName
        lastName
        role
        createdAt
        updatedAt
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        firstName
        lastName
        createdAt
        updatedAt
      }
    }
  }
`;

export const UPDATE_USER_PROFILE = gql`
  mutation UpdateUserProfile(
    $id: ID!
    $username: String!
    $firstName: String!
    $lastName: String!
  ) {
    updateUserProfile(
      id: $id
      username: $username
      firstName: $firstName
      lastName: $lastName
    ) {
      _id
      username
      firstName
      lastName
    }
  }
`;
