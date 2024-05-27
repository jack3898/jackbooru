import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useMemo } from "react";
import { useLoggedInUserLazyQuery } from "./generated-graphql-hooks.js";
import { type schemas } from "@internal/shared";

type AccountForm = schemas.account.AccountForm;

type UseLoginHookResult = {
  login: (credentials: AccountForm) => void;
};

export function useLogin(): UseLoginHookResult {
  const navigate = useNavigate();
  const [fetchLoggedInUser] = useLoggedInUserLazyQuery();

  const loginMutation = useMutation({
    mutationFn(data: AccountForm) {
      return fetch(`${import.meta.env["UNSAFE_BACKEND_URL"]}/api/login`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include"
      });
    },
    async onSuccess(data) {
      if (data.status === 200) {
        await navigate({ to: "/explore", search: { q: "" } });
        await fetchLoggedInUser({ fetchPolicy: "network-only" });
      }
    }
  });

  return useMemo(
    () => ({
      login(credentials: AccountForm): void {
        loginMutation.mutate(credentials);
      }
    }),
    [loginMutation]
  );
}

type UseLogoutHookResult = {
  logout: () => void;
};

export function useLogout(): UseLogoutHookResult {
  const navigate = useNavigate();
  const [fetchLoggedInUser] = useLoggedInUserLazyQuery();

  const logoutMutation = useMutation({
    mutationFn() {
      return fetch(`${import.meta.env["UNSAFE_BACKEND_URL"]}/api/logout`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        credentials: "include"
      });
    },
    async onSuccess(data) {
      if (data.status === 200) {
        await navigate({ from: "/", to: "/" });
        await fetchLoggedInUser({ fetchPolicy: "network-only" });
      }
    }
  });

  return useMemo(
    () => ({
      logout(): void {
        logoutMutation.mutate();
      }
    }),
    [logoutMutation]
  );
}
