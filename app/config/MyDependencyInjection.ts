import { MemberService } from "../service/member.service";
export const InjectionService =  [{provide:'MemberServiceInterface',useExisting:MemberService}]
