"use client"

import BaseHeader from "@/components/atom/header/baseHeader"
import LeftCaretURL from "@/assets/svg/caret-left.svg?url"
import { BaseInput } from "@/components/atom/input/baseInput"
import FixedBottomButton from "@/components/atom/button/fixedBottomButton"
import React from "react"

import { FieldValues, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { emailSchema } from "@/schema/authSchema"
import { useRouter, useSearchParams } from "next/navigation"
import { createQueryParamString } from "@/lib/queryParamUtils"
import StepIndicator from "@/components/atom/indicator/stepIndicator"
import IconButton from "@/components/atom/icon/iconButton"
import AuthTitle from "@/components/atom/title/authTitle"
import ErrorText from "@/components/atom/text/errorText"
import InputDescText from "@/components/atom/text/inputDescText"
import { EmailType } from "@/type/auth/signUp"
import { assignParamObject } from "@/lib/searchParamUtils"

export default function EmailPage() {
	const {
		register,
		handleSubmit,
		formState: { isValid, errors }
	} = useForm({
		resolver: zodResolver(emailSchema)
	})

	const router = useRouter()
	const searchParams = useSearchParams()
	const routerHandler = (req: FieldValues) => {
		const targetObj: EmailType = {
			email: req["email"],
			step: "5"
		}
		router.push(
			`/auth/signup?${createQueryParamString(
				assignParamObject(searchParams, targetObj)
			)}`
		)
	}

	const titles = ["이메일을", "입력해 주세요."]
	const descriptions = [
		"스타벅스 코리아의 새로운 서비스와 최신 이벤트 정보를 이메일로 보내드려요.",
		"주요 공지사항 및 이벤트 당첨안내 등 일부 소식은 수신동의 여부에 관계없이 발송됩니다."
	]

	return (
		<section>
			<BaseHeader
				leftComponent={
					<IconButton
						imageProps={{
							src: LeftCaretURL,
							alt: "left-caret.svg"
						}}
						buttonProps={{
							className: "cursor-pointer",
							onClick: () => router.back()
						}}
					/>
				}
				middleComponent={
					<StepIndicator stepNumber={4} activeStep={3}></StepIndicator>
				}
			></BaseHeader>

			<form
				onSubmit={handleSubmit((data) => {
					routerHandler(data)
				})}
				className="w-full flex flex-col mt-[60px] px-[30px]"
			>
				<AuthTitle
					titles={titles}
					wrapperProps={{ className: "mb-6" }}
					titleProps={{ className: "font-semibold" }}
				/>

				<BaseInput
					ct_type="text"
					ct_is_error={!!errors["email"]}
					placeholder="이메일을 입력해주세요"
					{...register("email")}
				/>
				<ErrorText text={errors?.email?.message as string} />

				<InputDescText
					descriptions={descriptions}
					wrapperProps={{ className: "mt-4" }}
				/>

				<FixedBottomButton
					button_title="다음"
					button_props={{ type: "submit" }}
				></FixedBottomButton>
			</form>
		</section>
	)
}
