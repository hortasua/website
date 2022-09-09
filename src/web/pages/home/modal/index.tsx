import { Dialog, Transition } from "@headlessui/react";
import type { FC } from "react";
import { Fragment } from "react";
import { Button } from "web/components/button";

import { HomeModalForm } from "./form";

interface HomeModalProps {
	isOpen: boolean;
	toggle: () => void;
	quizResult: string;
	setQuizResult: (value: string) => void;
}

export const HomeModal: FC<HomeModalProps> = ({
	isOpen,
	toggle,
	quizResult,
	setQuizResult,
}: HomeModalProps) => {
	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as="div" open={isOpen} onClose={toggle} className="relative z-10">
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black bg-opacity-25"></div>
				</Transition.Child>

				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
								{quizResult ? ( // eslint-disable-line multiline-ternary
									<>
										<Dialog.Title as="h2">
											Resultado obtido com sucesso!
										</Dialog.Title>
										<Dialog.Description as="p">
											Nossos robôs fizeram alguns cálculos e chegaram à
											conclusão de que o tamanho ideal para você é a{" "}
											<b>{quizResult}</b>.
										</Dialog.Description>
									</>
								) : (
									<>
										<Dialog.Title as="h2">
											Saiba o tamanho exato para você
										</Dialog.Title>
										<Dialog.Description as="p">
											Possuímos 3 versões do nosso produto: a{" "}
											<strong>Babycota</strong> (30cm), a{" "}
											<strong>Terracota</strong> (50cm) e a{" "}
											<strong>Alphacota</strong> (75cm). Este formulário te
											ajudará a escolher o tamanho ideal para você!
										</Dialog.Description>
									</>
								)}

								<div className="mt-10">
									{quizResult ? ( // eslint-disable-line multiline-ternary
										<div className="flex justify-center md:justify-end md:mr-10">
											<Button onClick={toggle}>
												Voltar para a página principal
											</Button>
										</div>
									) : (
										<HomeModalForm setQuizResult={setQuizResult} />
									)}
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};
