import { useServices } from "./useServices"
import { Project } from "../generated/conf-openapi"

/**
 * Returns currently active project. Can return undefined if project
 * is not in the context
 */
export default function useProject(): Project | undefined {
  const services = useServices()
  return services.activeProject
}
