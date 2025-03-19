import { ITask } from "./ITask";

export interface IUserStory {
    storyTicketId?: string;
    id: string;
    name: string;
    description: string;
    tasks?: ITask[];
    archivedTasks?: ITask[];
    chatHistory?: [];
}

export interface IUserStoryResponse {
    appId: string;
    features: IFeatureResponse[];
    regenerate: boolean;
    reqDesc: string;
    reqId: string;
}

interface IFeatureResponse {
    id: string;
    [key: string]: string;
}

export interface IUserStoriesRequest {
    appId: string;
    reqId: string;
    reqDesc: string;
    regenerate: boolean;
    technicalDetails: string;
    extraContext?: string;
}

export interface IUserStoryRequest {
    name: string;
    description: string;
    appId: string;
    featureId: string;
    featureRequest: string;
    contentType: string;
    fileContent: string;
    reqId: string;
    reqDesc: string;
    useGenAI: boolean;
    existingFeatureTitle: string;
    existingFeatureDesc: string;
}

export interface IUpdateUserStoryRequest{
  name: string;
  description: string;
  appId: string;
  featureId: string;
  featureRequest: string;
  existingFeatureTitle?: string;
  existingFeatureDesc?: string;
  contentType: string;
  fileContent: string;
  reqId: string;
  reqDesc: string;
  useGenAI: boolean;
}

export interface EpicResponse {
  epicName: string;
  epicTicketId: string;
}
