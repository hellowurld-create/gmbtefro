import { api } from "../../../lib/api";

export type PeerFounderCirclePublicInfo = {
  memberCount: number;
};

export type PeerFounderCircleStatus = PeerFounderCirclePublicInfo & {
  hasOpenedInvite: boolean;
};

export type PeerFounderCircleInviteResponse = PeerFounderCirclePublicInfo & {
  inviteUrl: string;
};

export async function fetchPeerFounderCircleInfo() {
  const { data } = await api.get<PeerFounderCirclePublicInfo>(
    "/peer-founder-circle",
  );
  return data;
}

export async function fetchPeerFounderCircleStatus() {
  const { data } = await api.get<PeerFounderCircleStatus>(
    "/peer-founder-circle/status",
  );
  return data;
}

export async function requestPeerFounderCircleInvite() {
  const { data } = await api.post<PeerFounderCircleInviteResponse>(
    "/peer-founder-circle/request-invite",
  );
  return data;
}
