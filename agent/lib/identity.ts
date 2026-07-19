// Zalo user → Base.vn username mapping.
// Only 3 people use this agent. Hardcoded mapping is simpler than a database.
// Zalo user IDs are in message.from.id — fill them after the first webhook
// delivery by checking logs. The mapping lets the agent attribute actions
// correctly: when dad says "giao viec X cho Hoa", the agent creates the task
// as hoathao (chairman), not as a generic bot.
interface ZaloIdentity {
  username: string;
  name: string;
  role: string;
}

const ZALO_TO_BASEVN: Record<string, ZaloIdentity> = {
  // "zalo_user_id_dad": { username: "hoathao", name: "Le Van Thao", role: "Chairman" },
  // "zalo_user_id_mom": { username: "thithao", name: "Thach Thao", role: "HR Director" },
  // "zalo_user_id_louis": { username: "hoathao", name: "Louis Le", role: "Admin" },
};

export function resolveZaloIdentity(message: any) {
  const zaloUserId = message?.from?.userId ?? message?.author?.userId;
  if (!zaloUserId) return null;

  const identity = ZALO_TO_BASEVN[zaloUserId];
  if (!identity) return null;

  return {
    authenticator: "zalo",
    principalType: "user" as const,
    principalId: zaloUserId,
    attributes: {
      userName: identity.name,
      basevnUsername: identity.username,
      role: identity.role,
    },
  };
}

export function getKnownUsers(): ZaloIdentity[] {
  return Object.values(ZALO_TO_BASEVN);
}
