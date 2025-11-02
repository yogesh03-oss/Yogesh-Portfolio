import { CreateUserData, ListProjectsData, UpdateProjectData, UpdateProjectVariables, GetSkillsForUserData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateUser(options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, void>): UseDataConnectMutationResult<CreateUserData, undefined>;
export function useCreateUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, void>): UseDataConnectMutationResult<CreateUserData, undefined>;

export function useListProjects(options?: useDataConnectQueryOptions<ListProjectsData>): UseDataConnectQueryResult<ListProjectsData, undefined>;
export function useListProjects(dc: DataConnect, options?: useDataConnectQueryOptions<ListProjectsData>): UseDataConnectQueryResult<ListProjectsData, undefined>;

export function useUpdateProject(options?: useDataConnectMutationOptions<UpdateProjectData, FirebaseError, UpdateProjectVariables>): UseDataConnectMutationResult<UpdateProjectData, UpdateProjectVariables>;
export function useUpdateProject(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateProjectData, FirebaseError, UpdateProjectVariables>): UseDataConnectMutationResult<UpdateProjectData, UpdateProjectVariables>;

export function useGetSkillsForUser(options?: useDataConnectQueryOptions<GetSkillsForUserData>): UseDataConnectQueryResult<GetSkillsForUserData, undefined>;
export function useGetSkillsForUser(dc: DataConnect, options?: useDataConnectQueryOptions<GetSkillsForUserData>): UseDataConnectQueryResult<GetSkillsForUserData, undefined>;
