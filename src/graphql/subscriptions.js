/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOption = /* GraphQL */ `
  subscription OnCreateOption {
    onCreateOption {
      id
      value
      count
      pollID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOption = /* GraphQL */ `
  subscription OnUpdateOption {
    onUpdateOption {
      id
      value
      count
      pollID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOption = /* GraphQL */ `
  subscription OnDeleteOption {
    onDeleteOption {
      id
      value
      count
      pollID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePoll = /* GraphQL */ `
  subscription OnCreatePoll {
    onCreatePoll {
      id
      Title
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Options {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdatePoll = /* GraphQL */ `
  subscription OnUpdatePoll {
    onUpdatePoll {
      id
      Title
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Options {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeletePoll = /* GraphQL */ `
  subscription OnDeletePoll {
    onDeletePoll {
      id
      Title
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Options {
        nextToken
        startedAt
      }
    }
  }
`;
