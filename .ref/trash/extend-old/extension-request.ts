import { endpointRequest } from "@factor/endpoint"
import { storeItem, stored } from "@factor/api"
import { FactorExtensionListing } from "../types"
import { endpointId } from "./util"

export const requestExtensionIndex = async ({
  type = "plugins"
}): Promise<FactorExtensionListing[]> => {
  const data = await endpointRequest({
    id: endpointId,
    method: "getIndex",
    params: { type }
  })

  storeItem(`${type}-index`, data)

  return data as FactorExtensionListing[]
}

export const requestExtensionSingle = async (
  name: string
): Promise<FactorExtensionListing> => {
  const data = await endpointRequest({
    id: endpointId,
    method: "getSingle",
    params: { name }
  })

  storeItem(`extension-${name}`, data)

  return data as FactorExtensionListing
}

export const getIndexCache = (type = "plugins"): unknown => {
  return stored(`${type}-index`)
}

export const getSingleCache = (name: string): unknown => {
  return stored(`extension-${name}`)
}
