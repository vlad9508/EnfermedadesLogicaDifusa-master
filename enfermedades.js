var enfermedades = [
	{
		"nombre":"Anisocoria",
		"descripcion":"Anisocoria, agrandamiento de una pupila, pupilas de diferente tamaño o pupilas de los ojos de diferente tamaño es el tamaño desigual de la pupila, la parte negra en el centro del ojo. La pupila se agranda con la luz tenue y se hace más pequeña con la luz brillante.",
		"recomendacion":"El tratamiento depende de la causa del tamaño desigual de las pupilas. Debe consultar con un médico si presenta un cambio súbito en el tamaño de éstas.",
		"sintomas":{
			"Aneurisma":0.6,
			"Sangrado en el interior del cráneo causado por traumatismo craneal":0.7,
			"Tumor cerebral o absceso":0.5,
			"Presión excesiva en un ojo causada por glaucoma":0.5,
			"Aumento de la presión intracraneal":0.6,
			"Infección de las membranas que rodean el cerebro (meningitis o encefalitis)":0.5,
			"Jaqueca":0.4
			}
	},
	{
		"nombre":"Atrofia del nervio óptico",
		"descripcion":"Atrofia del nervio óptico, atrofia óptica o neuropatía óptica es el daño al nervio óptico, el cual lleva imágenes de lo que vemos desde el ojo hasta el cerebro.",
		"recomendacion":"El daño por la atrofia del nervio óptico es irreversible. En lo posible, se debe encontrar y tratar la enfermedad subyacente para prevenir una pérdida mayor.",
		"sintomas":{
			"Tumor cerebral":0.6,
			"Arteritis craneal (algunas veces llamada arteritis temporal)":0.4,
			"Esclerosis múltiple":0.7,
			"Accidente cerebrovascular":0.5
			}
	},

	{
		"nombre":"Coloboma del iris",
		"descripcion":"Coloboma del iris es un agujero o defecto del iris del ojo y la mayoría de los colobomas están presentes desde el nacimiento (congénitos).",
		"recomendacion":"Ir al doc",
		"sintomas":{
			"Visión borrosa":0.6,
			"Disminución de la agudeza visual":0.7,
			"Imagen fantasma":0.5,
			"Afecciones hereditarias":0.7,
			"Traumatismo de ojo":0.6
			}
	},
	{
		"nombre":"Córnea opaca",
		"descripcion":"Córnea opaca, opacidad de la córnea o edema corneal es la pérdida de transparencia de la córnea.",
		"recomendacion":"Consulte con el oftalmólogo. No existe un tratamiento casero adecuado.",
		"sintomas":{
			"Quemaduras químicas en la córnea":0.3,
			"Tiene problemas de visión":0.7,
			"Desnutrición":0.5,
			"Traumatismo":0.5,
			"Deficiencia de vitamina A":0.6,
			"La superficie externa del ojo se muestra opaca":0.6
			}
	},
	{
		"nombre":"Distrofia de Fuchs",
		"descripcion":"Distrofia de Fuchs, distrofia endotelial de Fuchs o distrofia corneal de Fuchs es una enfermedad de los ojos en la cual células que recubren la superficie interna de la córnea lentamente empiezan a morir. La enfermedad normalmente afecta ambos ojos.",
		"recomendacion":"Se usan gotas o ungüentos para los ojos que sacan el líquido de la córnea para aliviar los síntomas de la distrofia de Fuchs.",
		"sintomas":{
			"Dolor en el ojo":0.4,
			"Ojos sensibles a la luz, sobre todo a la luz intensa":0.5,
			"Visión borrosa o nublada, al principio sólo por las mañanas":0.7,
			"Ver halos coloreados alrededor de las luces":0.5
			}
	},
	{
		"nombre":"Epiescleritis",
		"descripcion":"Epiescleritis es la irritación e inflamación de la epiesclerótica, una delgada capa de tejido que cubre la parte blanca (esclerótica) del ojo. Ésta ocurre sin una infección",
		"recomendacion":"La afección regularmente desaparece sin tratamiento en 1 a 2 semanas. El tratamiento con gotas oftálmicas que contengan corticosteroides puede aliviar los síntomas más rápido.",
		"sintomas":{
			"Coloración rosada o púrpura de la parte del ojo normalmente blanca":0.5,
			"Dolor ocular":0.6,
			"Sensibilidad ocular":0.7,
			"Sensibilidad a la luz":0.4,
			"Lagrimeo del ojo":0.5,
			"Herpes zóster":0.7,
			"Artritis reumatoidea":0.6,
			"Síndrome de Sjogren":0.5
			}
	},
		{
		"nombre":"Escleritis",
		"descripcion":"Escleritis o inflamación de la esclerótica es la inflamación de la esclerótica, la pared exterior blanca del ojo.",
		"recomendacion":"Las gotas oftálmicas con corticosteroides ayudan a reducir la inflamación. Algunas veces, las pastillas de corticosteroides se toman por vía oral. En algunos casos, se pueden utilizar antinflamatorios no esteroides (AINES) más nuevos.",
		"sintomas":{
			"Visión borrosa":0.6,
			"Sensibilidad y dolor ocular intensos":0.7,
			"Parches rojos en la parte normalmente blanca del ojo":0.4,
			"Sensibilidad a la luz, muy dolorosa":0.5,
			"Lagrimeo":0.5,
			"Examen oftalmológico":0.5,
			"Examen físico y análisis de sangre para buscar o descartar causas subyacentes":0.6
			}
	},
	{
		"nombre":"Hemorragia subconjuntival",
		"descripcion":"Hemorragia subconjuntival u ojo rojo es un parche rojo brillante que aparece en la esclerótica del ojo y es una afección denominada también ojo rojo.",
		"recomendacion":"No se necesita ningún tratamiento, pero la persona debe hacerse revisar la presión arterial de manera regular.",
		"sintomas":{
			"parche de color rojo brillante en el ojo":0.4,
			"la visión no cambia":0.5,
			"o se presenta secreción del ojo":0.5,
			"el parche es indoloro":0.5
			}
	},
	{
		"nombre":"Heterocromía",
		"descripcion":"Heterocromía, ojos de diferente color u ojos de colores diferentes es la presencia de ojos de diferente color en la misma persona.",
		"recomendacion":"Ir al doc",
		"sintomas":{
			"Heterocromía familiar (transmisión autosómica dominante)":0.7,
			"Algunos medicamentos utilizados para tratar el glaucoma pueden hacer que el iris (parte coloreada del ojo) se oscurezca":0.3,
			"Neurofibromatosis que puede hacer que el iris afectado se oscurezca":0.5,
			"Lesión, hemorragia (sangrado), glaucoma o un cuerpo extraño en el ojo":0.3
			}
	},
	{
		"nombre":"Mononeurapatía por compresión III par craneal",
		"descripcion":"Mononeurapatía por compresión III par craneal o parálisis del tercer nervio craneal es un problema con el funcionamiento del tercer par craneal, que causa visión doble y caída del párpado.",
		"recomendacion":"Medicamentos corticosteroides para reducir la hinchazón y aliviar la presión sobre el nervio Parche en los ojos o gafas con prismas para reducir la visión doble Medicamentos para el dolor",
		"sintomas":{
			"Visión doble":0.7,
			"Caída de un párpado (ptosis)":0.3,
			"Pupila agrandada que no reacciona bien a la luz":0.5,
			"Dolor de cabeza o dolor ocular":0.5,
			"Aneurismas cerebrales":0.5,
			"Vasos sanguíneos mal formados (malformaciones vasculares)":0.3
			}
	}
]
