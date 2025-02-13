const messages = {
	es: {
	  translations: {
		signup: {
		  title: "Regístrate",
		  toasts: {
			success: "¡Usuario creado con éxito! ¡Inicia sesión!",
			fail: "Error al crear usuario. Verifica los datos ingresados.",
		  },
		  form: {
			name: "Nombre",
			email: "Correo electrónico",
			password: "Contraseña",
			companyName: "Nombre de la Organización",
			phone: "Whatsapp (CÓDIGO DE ÁREA + NÚMERO)",
			plan:"Plan",
			attendants:"Asistentes",
			whatsapp:"Whatsapp",
			queues:"Colas"
		  },	  
		  buttons: {
			submit: "Registrarse",
			login: "¿Ya tienes una cuenta? ¡Inicia sesión!",
		  },
		  errors: {
			required: "Se requiere😒",
		  },	
		},
		passwordReset: {
		  title: "Restablecer contraseña",
		  voltar: "Volver a la pantalla de inicio de sesión",
		  form: {
			email: "Correo electrónico",
		  },
		  buttons: {
			submit: "Verificar Correo electrónico",
			verify: "Verificar Código"
		  },
		},
		login: {
		  title: "Iniciar sesión",
		  form: {
			email: "Correo electrónico",
			password: "Contraseña",
			button: "Acceder"
		  },
		  buttons: {
			submit: "Ingresar",
			register: "¿No tienes una cuenta? ¡Regístrate!",
		  },
		},
		companies: {
		  title: "Registrar Empresa",
		  form: {
			name: "Nombre de la Empresa",
			plan: "Plan",
			token: "Token",
			submit: "Registrar",
			success: "¡Empresa creada con éxito!",
		  },
		},
		auth: {
		  toasts: {
			success: "¡Inicio de sesión exitoso!",
		  },
		  dueDate: {
			expiration: "Tu suscripción expira en",
			days: "días!",
			day: "día!",
			expirationToday: "¡Tu suscripción expira hoy!",
		  },
		  token: "Token",
		},
		dashboard: {
		  tabs: {
			indicators: "Indicadores",
			assessments: "NPS",
			attendants: "Agentes"
		  },
		  charts: {
			perDay: {
			  title: "Atenciones hoy: ",
			},
		  },
		  cards: {
			inAttendance: "En Atención",
			waiting: "En Espera",
			activeAttendants: "Agentes Activos",
			finalized: "Finalizados",
			newContacts: "Nuevos Contactos",
			totalReceivedMessages: "Total de Mensajes Recibidos",
			totalSentMessages: "Total de Mensajes Enviados",
			averageServiceTime: "Tiempo Promedio de Atención",
			averageWaitingTime: "Tiempo Promedio de Espera",
			status: "Estado (Actual)"
		  },
		  users: {
			name: "Nombre",
			numberAppointments: "Cantidad de Atenciones",
			statusNow: "Actual",
			totalCallsUser: "Total de atenciones por usuario",
			totalAttendances: "Total de atenciones"
		  },
		  date: {
			initialDate: "Fecha Inicial",
			finalDate: "Fecha Final"
		  },
		  licence: {
			available: "Disponible hasta",
		  },
		  assessments: {
			totalCalls: "Total de Atenciones",
			callsWaitRating: "Atenciones esperando evaluación",
			callsWithoutRating: "Atenciones sin evaluación",
			ratedCalls: "Atenciones evaluadas",
			evaluationIndex: "Índice de evaluación",
			score: "Puntuación",
			prosecutors: "Promotores",
			neutral: "Neutros",
			detractors: "Detractores"
		  }
		},
		reports: {
		  title: "Informe de Encuestas Realizadas",
		  operator: "Operador",
		  period: "Período",
		  until: "Hasta",
		  date: "Fecha",
		  reportTitle: "Informes",
		  calls: "Atenciones",
		  search: "Búsquedas",
		  durationCalls: "Duración de las atenciones",
		  grupoSessions: "Atenciones en grupos",
		  until: "hasta",
		  groupTicketsReports: {
			timezone: "America/Sao_Paulo",
			msgToast: "Generando informe comprimido, por favor espere.",
			errorToast: "Error al generar el informe",
			back: "Volver",
			groupServiceReport: "Informe de Atención en Grupos",
			loading: "Cargando...",
			contact: "Contacto",
			dateOpen: "Fecha de apertura",
			dateLastUpdated: "Fecha Última Actualización",
			agent: "Quien atendió",
			agentClosed: "Quien cerró",
			waitingAssistance: "Esperando atención",
			process: "En atención"
		  },
		  researchReports: {
			response: "respuesta",
			active: "(Activa)",
			inactive: "(Inactiva)",
			quantity: "Cantidad",
			percentage: "porcentaje",
			title: "Informe de Encuestas Realizadas",
			activeSearch: "Búsqueda activa",
			inactiveSearch: "Búsqueda inactiva",
		  },
		  ticketDurationDetail: {
			msgToast: "Generando informe comprimido, por favor espere.",
			title: "Informe de Duración de la Atención",
			startService: "Inicio de la atención",
			lastUpdated: "Última actualización",
			lastAgent: "Último agente",
			durationFinished: "Duración después de finalizado"
		  },
		  ticketDuration: {
			title: "Informe de Duración de las Atenciones",
			contact: "Contacto",
			open: "Abiertos",
			pending: "Pendientes",
			finished: "Finalizados",
			durationFinished: "Duración de los finalizados",
			durationAfterFinished: "Duración después de finalizado",
			actions: "Acciones"
		  },
		  ticketReports: {
			msgToast: "Generando informe comprimido, por favor espere.",
			title: "Informe de Atención"
		  },
		  pdf: {
			title: "Relación de Atenciones Realizadas",
			exportTitle: "Relación de Atenciones en Grupos Realizadas"
		  }
		},
		todo: {
		  newTask: "Nueva Tarea",
		  add: "Agregar",
		  task: "Tareas"
		},
		contactImportWpModal: {
		  title: "Exportar Contactos a Excel",
		  buttons: {
			downloadModel: "Descargar modelo de excel para importación",
			closed: "Cerrar",
			import: "Seleccione el archivo de excel para importar Contactos"
		  }
		},
		connections: {
		  title: "Conexiones",
		  waitConnection: "Espere... ¡Sus conexiones serán reiniciadas!",
		  newConnection: "Nueva Conexión",
		  restartConnections: "Reiniciar Conexiones",
		  callSupport: "Llamar al Soporte",
		  newConnection: "Nueva Conexión",
		  toasts: {
			deleted: "¡Conexión eliminada con éxito!",
			closedimported: "Estamos cerrando los tickets importados, por favor espere unos momentos"
		  },
		  confirmationModal: {
			closedImportedTitle: "Cerrar tickets importados",
			closedImportedMessage: "Si confirma, todos los tickets importados serán cerrados",
			deleteTitle: "Eliminar",
			deleteMessage: "¿Está seguro? Esta acción no se puede revertir.",
			disconnectTitle: "Desconectar",
			disconnectMessage:
			  "¿Está seguro? Tendrá que leer el código QR nuevamente.",
		  },
		  buttons: {
			add: "Agregar Conexión",
			disconnect: "desconectar",
			tryAgain: "Intentar nuevamente",
			qrcode: "CÓDIGO QR",
			newQr: "Nuevo CÓDIGO QR",
			closedImported: "Cerrar todos los tickets Importados",
			preparing: "Preparando mensajes para importación",
			importing: "Importando Mensajes de WhatsApp",
			newQr: "Nuevo CÓDIGO QR",
			processed: "Procesado",
			in: "de",
			connecting: "Conectando",
		  },
		  typography: {
			processed: "Procesado",
			in: "de",
			date: "Fecha del mensaje"
		  },
		  toolTips: {
			disconnected: {
			  title: "Error al iniciar sesión de WhatsApp",
			  content:
				"Asegúrese de que su celular esté conectado a internet e intente nuevamente, o solicite un nuevo código QR",
			},
			qrcode: {
			  title: "Esperando lectura del código QR",
			  content:
				"Haga clic en el botón 'CÓDIGO QR' y lea el código QR con su celular para iniciar la sesión",
			},
			connected: {
			  title: "¡Conexión establecida!",
			},
			timeout: {
			  title: "Se perdió la conexión con el celular",
			  content:
				"Asegúrese de que su celular esté conectado a internet y WhatsApp esté abierto, o haga clic en el botón 'Desconectar' para obtener un nuevo código QR",
			},
		  },
		  table: {
			name: "Nombre",
			status: "Estado",
			lastUpdate: "Última actualización",
			default: "Predeterminado",
			actions: "Acciones",
			session: "Sesión",
			number: "Número de Whatsapp"
		  },
		},
		showTicketOpenModal: {
		  title: {
			header: "Atención Existente"
		  },
		  form: {
			message: "Este contacto ya está en atención:",
			user: "Agente",
			queue: "Cola"
		  },
		},
		showTicketLogModal: {
		  title: {
			header: "Registros"
		  },
		  options: {
			create: 'Ticket creado.',
			chatBot: 'ChatBot iniciado.',
			queue: ' - Cola definida.',
			open: ' inició la atención.',
			access: 'accedió al ticket.',
			transfered: 'transfirió el ticket.',
			receivedTransfer: 'recibió el ticket transferido.'
		  },
		},
		whatsappModal: {
		  title: {
			add: "Agregar Conexión",
			edit: "Editar Conexión",
		  },
		  tabs: {
			general: "General",
			messages: "Mensajes",
			assessments: "NPS",
			integrations: "Integraciones",
			schedules: "Horario de trabajo"
		  },
		  form: {
			importOldMessagesEnable: "Importar mensajes del dispositivo",
			importOldMessages: "Fecha de inicio de la importación",
			importRecentMessages: "Fecha de fin de la importación",
			importOldMessagesGroups: "Importar mensajes de grupo",
			closedTicketsPostImported: "Cerrar tickets después de la importación",
			name: "Nombre",
			queueRedirection: "Redirección de Cola",
			queueRedirectionDesc: "Seleccione una cola para que los contactos sin cola sean redirigidos",
			prompt: "Prompt",
			default: "Predeterminado",
			group: "Permitir grupos",
			timeSendQueue: "Tiempo para redirigir a la cola",
			importAlert: "ATENCIÓN: Al guardar, su conexión se cerrará, será necesario leer nuevamente el código QR para importar los mensajes",
			groupAsTicket: "Tratar grupos como ticket",
			timeCreateNewTicket: "Crear nuevo ticket en x minutos",
			maxUseBotQueues: "Enviar bot x veces",
			timeUseBotQueues: "Enviar bot en x minutos",
			expiresTicket: "Cerrar chats abiertos después de x minutos",
			expiresTicketNPS: "Cerrar chats esperando evaluación después de x minutos",
			maxUseBotQueuesNPS: "Cantidad máxima de veces que se enviará la evaluación",
			closeLastMessageOptions1: "Del agente/Cliente",
			closeLastMessageOptions2: "Del agente",
			outOfHoursMessage: "Mensaje fuera de horario",
			greetingMessage: "Mensaje de saludo",
			complationMessage: "Mensaje de conclusión",
			lgpdLinkPrivacy: "Enlace a la política de privacidad",
			lgpdMessage: "Mensaje de saludo LGPD",
			lgpdDeletedMessages: "Ofuscar mensaje borrado por el contacto",
			lgpdSendMessage: "Siempre solicitar confirmación del contacto",
			ratingMessage: "Mensaje de evaluación - La escala debe ser de 0 a 10",
			token: "Token para integración externa",
			sendIdQueue: "Cola",
			inactiveMessage: "Mensaje de inactividad",
			timeInactiveMessage: "Tiempo en minutos para el envío del aviso de inactividad",
			whenExpiresTicket: "Cerrar chats abiertos cuando el último mensaje sea",
			expiresInactiveMessage: "Mensaje de cierre por inactividad",
		  },
		  buttons: {
			okAdd: "Agregar",
			okEdit: "Guardar",
			cancel: "Cancelar",
		  },
		  menuItem: {
			enabled: "Habilitado",
			disabled: "Deshabilitado",
			minutes: "minutos",
		  },
		  success: "Conexión guardada con éxito.",
		},
		qrCode: {
		  message: "Lea el código QR para iniciar la sesión",
		},
		contacts: {
		  title: "Contactos",
		  toasts: {
			deleted: "¡Contacto eliminado con éxito!",
		  },
		  searchPlaceholder: "Buscar...",
		  confirmationModal: {
			deleteTitle: "Eliminar ",
			importTitlte: "Importar contactos",
			exportContact: "Exportar contactos",
			deleteMessage: "¿Está seguro de que desea eliminar este contacto? Se perderán todas las atenciones relacionadas.",
			blockContact: "¿Está seguro de que desea bloquear este contacto?",
			unblockContact: "¿Está seguro de que desea desbloquear este contacto?",
			importMessage: "¿Desea importar todos los contactos del teléfono?",
			importChat: "Importar Conversaciones",
			wantImport: "¿Desea importar todas las conversaciones del teléfono?"
		  },
		  buttons: {
			import: "Importar Contactos",
			add: "Agregar Contacto",
			export: "Exportar Contacto",
		  },
		  table: {
			name: "Nombre",
			whatsapp: "Conexión",
			email: "Correo electrónico",
			actions: "Acciones",
			lastMessage: "Último Mensaje"
		  },
		  menu: {
			importYourPhone: "Importar del dispositivo predeterminado",
			importToExcel: "Importar / Exportar desde Excel"
		  }
		},
		forwardMessage: {
		  text: "Reenviado"
		},
		forwardMessageModal: {
		  title: "Reenviar mensaje",
		  buttons: {
			ok: "Reenviar"
		  }
		},
		queueIntegrationModal: {
		  title: {
			add: "Agregar proyecto",
			edit: "Editar proyecto",
		  },
		  form: {
			id: "ID",
			type: "Tipo",
			name: "Nombre",
			projectName: "Nombre del Proyecto",
			language: "Lenguaje",
			jsonContent: "JsonContent",
			urlN8N: "URL",
			typebotSlug: "Typebot - Slug",
			typebotExpires: "Tiempo en minutos para expirar una conversación",
			typebotKeywordFinish: "Palabra para finalizar el ticket",
			typebotKeywordRestart: "Palabra para reiniciar el flujo",
			typebotRestartMessage: "Mensaje al reiniciar la conversación",
			typebotUnknownMessage: "Mensaje de opción inválida",
			typebotDelayMessage: "Intervalo (ms) entre mensajes",
		  },
		  buttons: {
			okAdd: "Agregar",
			okEdit: "Guardar",
			cancel: "Cancelar",
			test: "Probar Bot",
		  },
		  messages: {
			testSuccess: "¡Integración probada con éxito!",
			addSuccess: "Integración agregada con éxito.",
			editSuccess: "Integración editada con éxito.",
		  },
		},
		promptModal: {
		  form: {
			name: "Nombre",
			prompt: "Prompt",
			voice: "Voz",
			max_tokens: "Máximo de Tokens en la respuesta",
			temperature: "Temperatura",
			apikey: "API Key",
			max_messages: "Máximo de mensajes en el Historial",
			voiceKey: "Clave de la API de Voz",
			voiceRegion: "Región de Voz",
		  },
		  success: "¡Prompt guardado con éxito!",
		  title: {
			add: "Agregar Prompt",
			edit: "Editar Prompt",
		  },
		  buttons: {
			okAdd: "Agregar",
			okEdit: "Guardar",
			cancel: "Cancelar",
		  },
		},
		prompts: {
		  title: "Prompts",
		  table: {
			name: "Nombre",
			queue: "Sector/Cola",
			max_tokens: "Máximo Tokens Respuesta",
			actions: "Acciones",
		  },
		  confirmationModal: {
			deleteTitle: "Eliminar",
			deleteMessage: "¿Está seguro? ¡Esta acción no se puede revertir!",
		  },
		  buttons: {
			add: "Agregar Prompt",
		  },
		},
		contactModal: {
		  title: {
			add: "Agregar contacto",
			edit: "Editar contacto",
		  },
		  form: {
			mainInfo: "Datos del contacto",
			extraInfo: "Información adicional",
			name: "Nombre",
			number: "Número de Whatsapp",
			email: "Correo electrónico",
			extraName: "Nombre del campo",
			extraValue: "Valor",
			chatBotContact: "Deshabilitar chatbot para este contacto",
			termsLGDP: "Términos LGPD aceptados en:",
			allTicket: "Ver llamadas sin cola",
			allowGroup: "Permitir grupos",
		  },
		  buttons: {
			addExtraInfo: "Agregar información",
			okAdd: "Agregar",
			okEdit: "Guardar",
			cancel: "Cancelar",
		  },
		  success: "Contacto guardado con éxito.",
		},
		queueModal: {
		  title: {
			queueData: "Datos de la cola",
			text: "Horarios de atención",
			add: "Agregar cola",
			edit: "Editar cola",
			confirmationDelete: "¿Está seguro? Todas las opciones de integraciones serán eliminadas."
		  },
		  form: {
			name: "Nombre",
			color: "Color",
			orderQueue: "Orden de la cola (Bot)",
			rotate: "Rotación",
			timeRotate: "Tiempo de Rotación",
			greetingMessage: "Mensaje de saludo",
			complationMessage: "Mensaje de conclusión",
			outOfHoursMessage: "Mensaje fuera de horario",
			token: "Token",
			integrationId: "Integración",
			fileListId: "Lista de archivos",
			closeTicket: "Cerrar ticket"
		  },
		  buttons: {
			okAdd: "Agregar",
			okEdit: "Guardar",
			cancel: "Cancelar",
		  },
		  bot: {
			title: "Opciones",
			toolTipTitle: "Agregue opciones para construir un chatbot",
			toolTip: "Si solo hay una opción, se elegirá automáticamente, haciendo que el bot responda con el mensaje de la opción y siga adelante",
			selectOption: "Seleccione una opción",
			text: "Texto",
			attendent: "Agente",
			queue: "Cola",
			integration: "Integración",
			file: "Archivo",
			toolTipMessageTitle: "El mensaje es obligatorio para pasar al siguiente nivel",
			toolTipMessageContent: "El mensaje es obligatorio para pasar al siguiente nivel",
			selectUser: "Seleccione un Usuario",
			selectQueue: "Seleccione una Cola",
			selectIntegration: "Seleccione una Integración",
			addOptions: "Agregar opciones",
		  },
		  serviceHours: {
			dayWeek: "Día de la semana",
			startTimeA: "Hora Inicial - Turno A",
			endTimeA: "Hora Final - Turno A",
			startTimeB: "Hora Inicial - Turno B",
			endTimeB: "Hora Final - Turno B",
			monday: "Lunes",
			tuesday: "Martes",
			wednesday: "Miércoles",
			thursday: "Jueves",
			friday: "Viernes",
			saturday: "Sábado",
			sunday: "Domingo",
		  }
		},
		queueIntegrationModal: {
		  title: {
			add: "Agregar proyecto",
			edit: "Editar proyecto",
		  },
		  form: {
			id: "ID",
			type: "Tipo",
			name: "Nombre",
			projectName: "Nombre del Proyecto",
			language: "Lenguaje",
			jsonContent: "JsonContent",
			urlN8N: "URL",
			typebotSlug: "Typebot - Slug",
			typebotExpires: "Tiempo en minutos para expirar una conversación",
			typebotKeywordFinish: "Palabra para finalizar el ticket",
			typebotKeywordRestart: "Palabra para reiniciar el flujo",
			typebotRestartMessage: "Mensaje al reiniciar la conversación",
			typebotUnknownMessage: "Mensaje de opción inválida",
			typebotDelayMessage: "Intervalo (ms) entre mensajes",
		  },
		  buttons: {
			okAdd: "Agregar",
			okEdit: "Guardar",
			cancel: "Cancelar",
			test: "Probar Bot",
		  },
		  messages: {
			testSuccess: "¡Integración probada con éxito!",
			addSuccess: "Integración agregada con éxito.",
			editSuccess: "Integración editada con éxito.",
		  },
		},
		userModal: {
		  warning: "¡Para importar los mensajes es necesario leer el código QR nuevamente!",
		  title: {
			add: "Agregar usuario",
			edit: "Editar usuario",
			updateImage: "Actualizar imagen",
			removeImage: "Eliminar imagen"
		  },
		  form: {
			name: "Nombre",
			email: "Correo electrónico",
			password: "Contraseña",
			farewellMessage: "Mensaje de despedida",
			profile: "Perfil",
			startWork: "Inicio de trabajo",
			endWork: "Fin de trabajo",
			whatsapp: "Conexión Predeterminada",
			allTicketEnable: "Habilitado",
			allTicketDisable: "Deshabilitado",
			allTicket: "Ver llamadas sin cola",
			allowGroup: "Permitir Grupos",
			defaultMenuOpen: "Abierto",
			defaultMenuClosed: "Cerrado",
			defaultMenu: "Menú predeterminado",
			defaultTheme: "Tema Predeterminado",
			defaultThemeDark: "Oscuro",
			defaultThemeLight: "Claro",
		  },
		  buttons: {
			okAdd: "Agregar",
			okEdit: "Guardar",
			cancel: "Cancelar",
			addImage: "Agregar Imagen",
			editImage: "Editar Imagen"
		  },
		  success: "Usuario guardado con éxito.",
		},
		companyModal: {
		  title: {
			add: "Agregar empresa",
			edit: "Editar empresa",
		  },
		  form: {
			name: "Nombre",
			email: "Correo electrónico",
			passwordDefault: "Contraseña",
			numberAttendants: "Usuarios",
			numberConections: "Conexiones",
		  },
		  buttons: {
			okAdd: "Agregar",
			okEdit: "Guardar",
			cancel: "Cancelar",
		  },
		  success: "Empresa guardada con éxito.",
		},
		scheduleModal: {
		  title: {
			add: "Nueva Programación",
			edit: "Editar Programación",
		  },
		  form: {
			body: "Mensaje",
			contact: "Contacto",
			sendAt: "Fecha de Programación",
			sentAt: "Fecha de Envío",
		  },
		  buttons: {
			okAdd: "Agregar",
			okEdit: "Guardar",
			cancel: "Cancelar",
		  },
		  success: "Programación guardada con éxito.",
		},
		tagModal: {
		  title: {
			add: "Nueva Etiqueta",
			edit: "Editar Etiqueta",
			addKanban: "Nuevo Carril",
			editKanban: "Editar Carril",
		  },
		  form: {
			name: "Nombre",
			color: "Color",
		  },
		  buttons: {
			okAdd: "Agregar",
			okEdit: "Guardar",
			cancel: "Cancelar",
		  },
		  success: "Etiqueta guardada con éxito.",
		  successKanban: "Carril guardado con éxito.",
		},
		fileModal: {
		  title: {
			add: "Agregar lista de archivos",
			edit: "Editar lista de archivos",
		  },
		  buttons: {
			okAdd: "Guardar",
			okEdit: "Editar",
			cancel: "Cancelar",
			fileOptions: "Agregar archivo",
		  },
		  form: {
			name: "Nombre de la lista de archivos",
			message: "Detalles de la lista",
			fileOptions: "Lista de archivos",
			extraName: "Mensaje para enviar con archivo",
			extraValue: "Valor de la opción",
		  },
		  success: "¡Lista de archivos guardada con éxito!",
		},
		chat: {
		  noTicketMessage: "Seleccione un ticket para comenzar a chatear.",
		},
		uploads: {
		  titles: {
			titleUploadMsgDragDrop: "⬇️ ARRASTRE Y SUELTE ARCHIVOS EN EL CAMPO DE ABAJO ⬇️",
			titleFileList: "Lista de archivo(s)"
		  },
		},
		chatInternal: {
		  new: "Nueva",
		  modal: {
			conversation: "Conversación",
			title: "Título",
			filterUsers: "Filtro por Usuarios",
			cancel: "Cerrar",
			save: "Guardar"
		  },
		  modalDelete: {
			title: "Eliminar Conversación",
			message: "Esta acción no se puede revertir, ¿confirmar?"
		  }
		},
		ticketsManager: {
		  questionCloseTicket: "¿DESEA CERRAR TODOS LOS TICKETS?",
		  yes: "SÍ",
		  not: "NO",
		  buttons: {
			newTicket: "Nuevo",
			resolveAll: "Resolver Todos",
			close: "Cerrar",
			new: "Nuevo"
		  },
		},
		ticketsQueueSelect: {
		  placeholder: "Colas",
		},
		tickets: {
		  toasts: {
			deleted: "La atención en la que estabas fue eliminada.",
		  },
		  notification: {
			message: "Mensaje de",
		  },
		  tabs: {
			open: { title: "Abiertas" },
			closed: { title: "Resueltas" },
			search: { title: "Búsqueda" },
		  },
		  search: {
			placeholder: "Buscar atención y mensajes",
			filterConections: "Filtro por Conexión",
			filterConectionsOptions: {
			  open: "Abierto",
			  closed: "Cerrado",
			  pending: "Pendiente",
			},
			filterUsers: "Filtro por Usuarios"
		  },
		  buttons: {
			showAll: "Todos",
			returnQueue: "Devolver a la Cola",
			scredule: "Programación",
			deleteTicket: "Eliminar Ticket"
		  },
		  closedTicket: {
			closedMessage: "Cerrar Ticket Con Mensaje de Despedida",
			closedNotMessage: "Cerrar Ticket Sin Mensaje de Despedida"
		  }
		},
		transferTicketModal: {
		  title: "Transferir Ticket",
		  fieldLabel: "Escriba para buscar usuarios",
		  fieldQueueLabel: "Transferir a cola",
		  fieldQueuePlaceholder: "Seleccione una cola",
		  fieldWhatsapp: "Seleccione un whatsapp",
		  noOptions: "No se encontró ningún usuario con ese nombre",
		  buttons: {
			ok: "Transferir",
			cancel: "Cancelar",
		  },
		},
		chatInternal: {
		  new: "Nueva",
		  modal: {
			conversation: "Conversación",
			title: "Título",
			filterUsers: "Filtro por Usuarios",
			cancel: "Cerrar",
			save: "Guardar"
		  },
		  modalDelete: {
			title: "Eliminar Conversación",
			message: "Esta acción no se puede revertir, ¿confirmar?"
		  }
		},
		ticketsList: {
		  called: "Llamada",
		  today: "Hoy",
		  missedCall: "Llamada de voz/vídeo perdida a las",
		  pendingHeader: "Esperando",
		  assignedHeader: "Atendiendo",
		  groupingHeader: "Grupos",
		  noTicketsTitle: "¡Nada aquí!",
		  noTicketsMessage: "No se encontraron atenciones con este estado o término de búsqueda",
		  noQueue: "Sin Cola",
		  buttons: {
			accept: "Aceptar",
			cancel: "Cancelar",
			start: "iniciar",
			closed: "Cerrar",
			reopen: "Reabrir",
			transfer: "Transferir",
			ignore: "Ignorar",
		  },
		  acceptModal: {
			title: "Aceptar Chat",
			queue: "Seleccionar sector"
		  },
		},
		newTicketModal: {
		  title: "Crear Ticket",
		  fieldLabel: "Escriba para buscar el contacto",
		  add: "Agregar",
		  buttons: {
			ok: "Guardar",
			cancel: "Cancelar",
		  },
		},
		SendContactModal: {
		  title: "Enviar contacto",
		  fieldLabel: "Escriba para buscar el contacto",
		  add: "Agregar",
		  buttons: {
			ok: "Enviar",
			cancel: "Cancelar",
		  },
		},
		mainDrawer: {
		  listItems: {
			dashboard: "Dashboard",
			connections: "Conexiones",
			chatsTempoReal: "Panel de Atenciones",
			tickets: "Atenciones",
			quickMessages: "Respuestas Rápidas",
			plantao: "Horario",
			contacts: "Contactos",
			queues: "Colas & Chatbot",
			tags: "Etiquetas",
			administration: "Administración",
			companies: "Empresas",
			users: "Usuarios",
			settings: "Configuraciones",
			files: "Lista de archivos",
			helps: "Ayuda",
			messagesAPI: "API",
			schedules: "Programaciones",
			campaigns: "Campañas",
			annoucements: "Informativos",
			chats: "Chat Interno",
			financeiro: "Financiero",
			queueIntegration: "Integraciones",
			prompts: "Open.Ai",
			version: "Versión",
			kanban: "Kanban"
		  },
		  appBar: {
			user: {
			  profile: "Perfil",
			  logout: "Salir",
			  message: "Hola",
			  messageEnd: "bienvenido a",
			  active: "Activo hasta",
			  goodMorning: "Hola,",
			  myName: "mi nombre es",
			  continuity: "y continuaré con su atención.",
			  virtualAssistant: "Asistente Virtual"
			},
			message: {
			  location: "Ubicación",
			  contact: "Contacto"
			},
			notRegister: "Ningún registro",
			refresh: "Actualizar"
		  },
		},
		languages: {
		  undefined: "Idioma",
		  "pt-BR": "Português",
		  es: "Español",
		  en: "English",
		  tr: "Türkçe"
		},
		messagesAPI: {
		  title: "API",
		  textMessage: {
			number: "Número",
			body: "Mensaje",
			token: "Token registrado",
			userId: "ID del usuario/agente",
			queueId: "ID de la Cola",
		  },
		  mediaMessage: {
			number: "Número",
			body: "Nombre del archivo",
			media: "Archivo",
			token: "Token registrado",
		  },
		  API: {
			title: "Documentación para envío de mensajes",
			methods: {
			  title: "Métodos de Envío",
			  messagesText: "Mensajes de Texto",
			  messagesMidia: "Mensajes de Media"
			},
			instructions: {
			  title: "Instrucciones",
			  comments: "Observaciones Importantes",
			  comments1: "Antes de enviar mensajes, es necesario registrar el token vinculado a la conexión que enviará los mensajes. <br />Para realizar el registro, acceda al menú 'Conexiones', haga clic en el botón editar de la conexión e inserte el token en el campo correspondiente.",
			  comments2: "El número para envío no debe tener máscara o caracteres especiales y debe estar compuesto por:",
			  codeCountry: "Código del País",
			  code: "DDD",
			  number: "Número"
			},
			text: {
			  title: "1. Mensajes de Texto",
			  instructions: "A continuación, se muestra la lista de información necesaria para el envío de mensajes de texto:"
			},
			media: {
			  title: "2. Mensajes de Media",
			  instructions: "A continuación, se muestra la lista de información necesaria para el envío de mensajes de texto:"
			}
		  }
		},
		notifications: {
		  noTickets: "Ninguna notificación.",
		},
		quickMessages: {
		  title: "Respuestas Rápidas",
		  searchPlaceholder: "Buscar...",
		  noAttachment: "Sin adjunto",
		  confirmationModal: {
			deleteTitle: "Eliminación",
			deleteMessage: "¡Esta acción es irreversible! ¿Desea continuar?",
		  },
		  buttons: {
			add: "Agregar",
			attach: "Adjuntar Archivo",
			cancel: "Cancelar",
			edit: "Editar"
		  },
		  toasts: {
			success: "¡Atajo agregado con éxito!",
			deleted: "¡Atajo eliminado con éxito!",
		  },
		  dialog: {
			title: "Mensaje Rápido",
			shortcode: "Atajo",
			message: "Respuesta",
			save: "Guardar",
			cancel: "Cancelar",
			geral: "Global",
			add: "Agregar",
			edit: "Editar"
		  },
		  table: {
			shortcode: "Atajo",
			message: "Mensaje",
			actions: "Acciones",
			mediaName: "Nombre del Archivo",
			status: "Estado"
		  }
		},
		contactLists: {
		  title: "Listas de Contactos",
		  table: {
			name: "Nombre",
			contacts: "Contactos",
			actions: "Acciones",
		  },
		  buttons: {
			add: "Nueva Lista",
		  },
		  dialog: {
			name: "Nombre",
			company: "Empresa",
			okEdit: "Editar",
			okAdd: "Agregar",
			add: "Agregar",
			edit: "Editar",
			cancel: "Cancelar",
		  },
		  confirmationModal: {
			deleteTitle: "Eliminar",
			deleteMessage: "Esta acción no se puede revertir.",
		  },
		  toasts: {
			deleted: "Registro eliminado",
		  },
		},
		contactListItems: {
		  title: "Contactos",
		  searchPlaceholder: "Búsqueda",
		  buttons: {
			add: "Nuevo",
			lists: "Listas",
			import: "Importar",
		  },
		  dialog: {
			name: "Nombre",
			number: "Número",
			whatsapp: "Whatsapp",
			email: "Correo electrónico",
			okEdit: "Editar",
			okAdd: "Agregar",
			add: "Agregar",
			edit: "Editar",
			cancel: "Cancelar",
		  },
		  table: {
			name: "Nombre",
			number: "Número",
			whatsapp: "Whatsapp",
			email: "Correo electrónico",
			actions: "Acciones",
		  },
		  confirmationModal: {
			deleteTitle: "Eliminar",
			deleteMessage: "Esta acción no se puede revertir.",
			importMessage: "¿Desea importar los contactos de esta hoja de cálculo? ",
			importTitlte: "Importar",
		  },
		  toasts: {
			deleted: "Registro eliminado",
		  },
		},
		kanban: {
		  title: "Kanban",
		  searchPlaceholder: "Búsqueda",
		  subMenus: {
			list: "Panel",
			tags: "Carriles"
		  }
		},
		campaigns: {
		  title: "Campañas",
		  searchPlaceholder: "Búsqueda",
		  subMenus: {
			list: "Listado",
			listContacts: "Lista de contactos",
			settings: "Configuraciones"
		  },
		  settings: {
			randomInterval: "Intervalo Aleatorio de Disparo",
			noBreak: "Sin Intervalo",
			intervalGapAfter: "Intervalo mayor después de",
			undefined: "No definido",
			messages: "mensajes",
			laggerTriggerRange: "Intervalo de disparo mayor",
			addVar: "Agregar variable",
			save: "Guardar",
			close: "Cerrar",
			add: "Agregar",
			shortcut: "Atajo",
			content: "Contenido",
		  },
		  buttons: {
			add: "Nueva Campaña",
			contactLists: "Listas de Contactos",
		  },
		  table: {
			name: "Nombre",
			whatsapp: "Conexión",
			contactList: "Lista de Contactos",
			option: "Ninguna",
			disabled: "Deshabilitada",
			enabled: "Habilitada",
			status: "Estado",
			scheduledAt: "Programación",
			completedAt: "Completada",
			confirmation: "Confirmación",
			actions: "Acciones",
		  },
		  dialog: {
			new: "Nueva Campaña",
			update: "Editar Campaña",
			readonly: "Solo Visualización",
			help: "Utilice variables como {nombre}, {numero}, {email} o defina variables personalizadas.",
			form: {
			  name: "Nombre",
			  message1: "Mensaje 1",
			  message2: "Mensaje 2",
			  message3: "Mensaje 3",
			  message4: "Mensaje 4",
			  message5: "Mensaje 5",
			  confirmationMessage1: "Mensaje de Confirmación 1",
			  confirmationMessage2: "Mensaje de Confirmación 2",
			  confirmationMessage3: "Mensaje de Confirmación 3",
			  confirmationMessage4: "Mensaje de Confirmación 4",
			  confirmationMessage5: "Mensaje de Confirmación 5",
			  messagePlaceholder: "Contenido del mensaje",
			  whatsapp: "Conexión",
			  status: "Estado",
			  scheduledAt: "Programación",
			  confirmation: "Confirmación",
			  contactList: "Lista de Contacto",
			  tagList: "Etiquetas"
			},
			buttons: {
			  add: "Agregar",
			  edit: "Actualizar",
			  okadd: "Ok",
			  cancel: "Cancelar Disparos",
			  restart: "Reiniciar Disparos",
			  close: "Cerrar",
			  attach: "Adjuntar Archivo",
			},
		  },
		  confirmationModal: {
			deleteTitle: "Eliminar",
			deleteMessage: "Esta acción no se puede revertir.",
		  },
		  toasts: {
			success: "Operación realizada con éxito",
			cancel: "Campaña cancelada",
			restart: "Campaña reiniciada",
			deleted: "Registro eliminado",
		  },
		},
		campaignReport: {
		  title: "Informe de",
		  inactive: "Inactiva",
		  scheduled: "Programada",
		  process: "En Progreso",
		  cancelled: "Cancelada",
		  finished: "Finalizada",
		  campaign: "Campaña",
		  validContacts: "Contactos Válidos",
		  confirmationsRequested: "Confirmaciones Solicitadas",
		  confirmations: "Confirmaciones",
		  deliver: "Entregados",
		  connection: "Conexión",
		  contactLists: "Lista de Contactos",
		  schedule: "Programación",
		  conclusion: "Conclusión"
		},
		announcements: {
		  title: "Informativos",
		  searchPlaceholder: "Búsqueda",
		  active: "Activo",
		  inactive: "Inactivo",
		  buttons: {
			add: "Nuevo Informativo",
			contactLists: "Listas de Informativos",
		  },
		  table: {
			priority: "Prioridad",
			title: "Título",
			text: "Texto",
			mediaName: "Archivo",
			status: "Estado",
			actions: "Acciones",
		  },
		  dialog: {
			edit: "Edición de Informativo",
			add: "Nuevo Informativo",
			update: "Editar Informativo",
			readonly: "Solo Visualización",
			form: {
			  priority: "Prioridad",
			  title: "Título",
			  text: "Texto",
			  mediaPath: "Archivo",
			  status: "Estado",
			  high: "Alta",
			  medium: "Media",
			  low: "Baja",
			  active: "Activo",
			  inactive: "Inactivo"
			},
			buttons: {
			  add: "Agregar",
			  edit: "Actualizar",
			  okadd: "Ok",
			  cancel: "Cancelar",
			  close: "Cerrar",
			  attach: "Adjuntar Archivo",
			},
		  },
		  confirmationModal: {
			deleteTitle: "Eliminar",
			deleteMessage: "Esta acción no se puede revertir.",
		  },
		  toasts: {
			success: "Operación realizada con éxito",
			deleted: "Registro eliminado",
		  },
		},
		campaignsConfig: {
		  title: "Configuraciones de Campañas",
		},
		queues: {
		  title: "Colas & Chatbot",
		  table: {
			name: "Nombre",
			color: "Color",
			greeting: "Mensaje de saludo",
			orderQueue: "Orden de la cola (bot)",
			actions: "Acciones",
			ID: "ID"
		  },
		  buttons: {
			add: "Agregar cola",
		  },
		  toasts: {
			success: "Cola guardada con éxito",
			deleted: "Cola eliminada con éxito",
		  },
		  confirmationModal: {
			deleteTitle: "Eliminar",
			  deleteMessage:
			  "¿Está seguro? ¡Esta acción no se puede revertir! Las atenciones en esta cola seguirán existiendo, pero ya no tendrán ninguna cola asignada.",
		  },
		},
		queue: {
		  queueData: "Datos",
		},
		queueSelect: {
		  inputLabel: "Colas",
		  inputLabelRO: "Colas solo lectura",
		},
		queueIntegration: {
		  title: "Integraciones",
		  table: {
			id: "ID",
			type: "Tipo",
			name: "Nombre",
			projectName: "Nombre del Proyecto",
			language: "Lenguaje",
			lastUpdate: "Última actualización",
			actions: "Acciones",
		  },
		  buttons: {
			add: "Agregar Proyecto",
		  },
		  searchPlaceholder: "Buscar...",
		  confirmationModal: {
			deleteTitle: "Eliminar",
			deleteMessage:
			  "¿Está seguro? Esta acción no se puede revertir y se eliminará de las colas y conexiones vinculadas",
		  },
		},
		users: {
		  title: "Usuarios",
		  table: {
			status: "Estado",
			name: "Nombre",
			email: "Correo electrónico",
			profile: "Perfil",
			startWork: "Inicio de trabajo",
			endWork: "Fin de trabajo",
			actions: "Acciones",
			ID: "ID"
		  },
		  buttons: {
			add: "Agregar usuario",
		  },
		  toasts: {
			deleted: "Usuario eliminado con éxito.",
		  },
		  confirmationModal: {
			deleteTitle: "Eliminar",
			deleteMessage:
			  "Todos los datos del usuario se perderán. Las atenciones abiertas de este usuario se moverán a la cola.",
		  },
		},
		compaies: {
		  title: "Empresas",
		  table: {
			ID: "ID",
			status: "Activo",
			name: "Nombre",
			email: "Correo electrónico",
			password: "Contraseña",
			phone: "Teléfono",
			plan: "Plan",
			active: "Activo",
			numberAttendants: "Agentes",
			numberConections: "Conexiones",
			value: "Valor",
			namePlan: "Nombre Plan",
			numberQueues: "Colas",
			useCampaigns: "Campañas",
			useExternalApi: "Rest API",
			useFacebook: "Facebook",
			useInstagram: "Instagram",
			useWhatsapp: "Whatsapp",
			useInternalChat: "Chat Interno",
			useSchedules: "Programación",
			createdAt: "Creada En",
			dueDate: "Vencimiento",
			lastLogin: "Últ. Inicio de sesión",
			actions: "Acciones",
			money: "$",
			yes: "Sí",
			no: "No",
			document: "CUIT/CUIL",
			recurrence: "Recurrencia",
			monthly: "Mensual",
			bimonthly: "Bimestral",
			quarterly: "Trimestral",
			semester: "Semestral",
			yearly: "Anual",
			clear: "Limpiar",
			delete: "Eliminar",
			user: "Usuario",
			save: "Guardar"
		  },
		  buttons: {
			add: "Agregar empresa",
		  },
		  toasts: {
			deleted: "Empresa eliminada con éxito.",
		  },
		  confirmationModal: {
			deleteTitle: "Eliminar",
			deleteMessage:
			  "Todos los datos de la empresa se perderán. Los tickets abiertos de este usuario se moverán a la cola.",
		  },
		},
		plans: {
		  form: {
			name: "Nombre",
			users: "Usuarios",
			connections: "Conexiones",
			campaigns: "Campañas",
			schedules: "Programaciones",
			enabled: "Habilitadas",
			disabled: "Deshabilitadas",
			clear: "Limpiar",
			delete: "Eliminar",
			save: "Guardar",
			yes: "Sí",
			no: "No",
			money: "$"
		  }
		},
		helps: {
		  title: "Centro de Ayuda",
		  settings: {
			codeVideo: "Código del Video",
			description: "Descripción",
			clear: "Limpiar",
			delete: "Eliminar",
			save: "Guardar"
		  }
		},
		schedules: {
		  title: "Programaciones",
		  confirmationModal: {
			deleteTitle: "¿Está seguro de que quiere eliminar esta Programación?",
			deleteMessage: "Esta acción no se puede revertir.",
		  },
		  table: {
			contact: "Contacto",
			body: "Mensaje",
			sendAt: "Fecha de Programación",
			sentAt: "Fecha de Envío",
			status: "Estado",
			actions: "Acciones",
		  },
		  buttons: {
			add: "Nueva Programación",
		  },
		  toasts: {
			deleted: "Programación eliminada con éxito.",
		  },
		},
		tags: {
		  title: "Etiquetas",
		  confirmationModal: {
			deleteTitle: "¿Está seguro de que quiere eliminar esta Etiqueta?",
			deleteMessage: "Esta acción no se puede revertir.",
		  },
		  table: {
			name: "Nombre",
			kanban: "Kanban",
			color: "Color",
			tickets: "Registros Etiquetas",
			contacts: "Contactos",
			actions: "Acciones",
		  },
		  buttons: {
			add: "Nueva Etiqueta",
		  },
		  toasts: {
			deleted: "Etiqueta eliminada con éxito.",
		  },
		},
		tagsKanban: {
		  title: "Carriles",
		  laneDefault: "Abierto",
		  confirmationModal: {
			deleteTitle: "¿Está seguro de que quiere eliminar este Carril?",
			deleteMessage: "Esta acción no se puede revertir.",
		  },
		  table: {
			name: "Nombre",
			color: "Color",
			tickets: "Tickets",
			actions: "Acciones",
		  },
		  buttons: {
			add: "Nuevo Carril",
		  },
		  toasts: {
			deleted: "Carril eliminado con éxito.",
		  },
		},
		files: {
		  title: "Lista de archivos",
		  table: {
			name: "Nombre",
			contacts: "Contactos",
			actions: "Acción"
		  },
		  toasts: {
			deleted: "¡Lista eliminada con éxito!",
			deletedAll: "¡Todas las listas fueron eliminadas con éxito!",
		  },
		  buttons: {
			add: "Agregar",
			deleteAll: "Eliminar Todos",
		  },
		  confirmationModal: {
			deleteTitle: "Eliminar",
			deleteAllTitle: "Eliminar Todos",
			deleteMessage: "¿Está seguro de que desea eliminar esta lista?",
			deleteAllMessage: "¿Está seguro de que desea eliminar todas las listas?",
		  },
		},
		settings: {
		  success: "Configuraciones guardadas con éxito.",
		  title: "Configuraciones",
		  tabs: {
			options: "Opciones",
			plans: "Planes",
			helps: "Ayuda"
		  },
		  settings: {
			userCreation: {
			  name: "Creación de usuario",
			  options: {
				enabled: "Activado",
				disabled: "Desactivado",
			  },
			},
			tabs: {
			  options: "Opciones",
			  schedules: "Horarios",
			  plans: "Planes",
			  help: "Ayuda"
			},
			options: {
			  disabled: "Deshabilitadas",
			  enabled: "Habilitadas",
			  updating: "Actualizando...",
			  creationCompanyUser: "Creación de Empresa/Usuario",
			  evaluations: "Evaluaciones",
			  officeScheduling: "Programación de Horario de Trabajo",
			  queueManagement: "Gestión por Cola",
			  companyManagement: "Gestión por Empresa",
			  connectionManagement: "Gestión por Conexión",
			  sendGreetingAccepted: "Enviar saludo al aceptar el ticket",
			  sendMsgTransfTicket: "Enviar mensaje de transferencia de sector/agente",
			  checkMsgIsGroup: "Ignorar Mensajes de Grupos",
			  chatBotType: "Tipo de Bot",
			  userRandom: "Elegir agente aleatorio",
			  buttons: "Botones",
			  acceptCallWhatsapp: "¿Informar que no acepta llamadas en whatsapp?",
			  sendSignMessage: "Permitir que el agente elija ENVIAR Firma",
			  sendGreetingMessageOneQueues: "Enviar saludo cuando haya solo 1 cola",
			  sendQueuePosition: "Enviar mensaje con la posición en la cola",
			  sendFarewellWaitingTicket: "Enviar mensaje de despedida en Espera",
			  acceptAudioMessageContact: "¿Acepta recibir audio de todos los contactos?",
			  enableLGPD: "Habilitar tratamiento LGPD",
			  requiredTag: "Etiqueta obligatoria para cerrar ticket"
			},
			LGPD: {
			  title: "LGPD",
			  welcome: "Mensaje de bienvenida(LGPD)",
			  linkLGPD: "Enlace a la política de privacidad",
			  obfuscateMessageDelete: "Ofuscar mensaje borrado",
			  alwaysConsent: "Siempre solicitar consentimiento",
			  obfuscatePhoneUser: "Ofuscar número de teléfono para usuarios",
			  enabled: "Habilitado",
			  disabled: "Deshabilitado"
			}
		  },
		},
		messagesList: {
		  header: {
			assignedTo: "Asignado a:",
			dialogRatingTitle: "¿Desea dejar una evaluación de atención para el cliente?",
			dialogClosingTitle: "¡Finalizando la atención con el cliente!",
			dialogRatingCancel: "Resolver CON Mensaje de Despedida",
			dialogRatingSuccess: "Resolver y Enviar Evaluación",
			dialogRatingWithoutFarewellMsg: "Resolver SIN Mensaje de Despedida",
			ratingTitle: "Elija un menú de evaluación",
			notMessage: "Ningún mensaje seleccionado",
			buttons: {
			  return: "Volver",
			  resolve: "Resolver",
			  reopen: "Reabrir",
			  accept: "Aceptar",
			  rating: "Enviar Evaluación",
			  enableIntegration: "Habilitar/deshabilitar integración",
			  logTicket: "Registros del Ticket",
			  requiredTag: "Debe asignar una etiqueta antes de cerrar el ticket.",
			},
		  },
		},
		messagesInput: {
		  placeholderOpen: "Escriba un mensaje o presione '/' para respuestas rápidas",
		  placeholderClosed:
			"Reabra o acepte este ticket para enviar un mensaje.",
		  signMessage: "Firmar",
		  privateMessage: "Mensaje Privado"
		},
		contactDrawer: {
		  header: "Datos del contacto",
		  buttons: {
			edit: "Editar contacto",
			block: "Bloquear",
			unblock: "Desbloquear",
		  },
		  extraInfo: "Otra información",
		},
		messageVariablesPicker: {
		  label: "Variables disponibles",
		  vars: {
			contactFirstName: "Primer Nombre",
			contactName: "Nombre",
			user: "Agente",
			greeting: "Saludo",
			protocolNumber: "Protocolo",
			date: "Fecha",
			hour: "Hora",
			ticket_id: "N° del Llamado",
			queue: "Sector",
			connection: "Conexión"
		  }
		},
		ticketOptionsMenu: {
		  schedule: "Programación",
		  delete: "Eliminar",
		  transfer: "Transferir",
		  registerAppointment: "Observaciones del Contacto",
		  resolveWithNoFarewell: "Finalizar sin despedida",
		  acceptAudioMessage: "¿Aceptar audios del contacto?",
		  appointmentsModal: {
			title: "Observaciones del Contacto",
			textarea: "Observación",
			placeholder: "Ingrese aquí la información que desea registrar",
		  },
		  confirmationModal: {
			title: "Eliminar el ticket del contacto",
			titleFrom: "del contacto ",
			message: "¡Atención! Todos los mensajes relacionados con el ticket se perderán.",
		  },
		  buttons: {
			delete: "Eliminar",
			cancel: "Cancelar",
		  },
		},
		confirmationModal: {
		  buttons: {
			confirm: "Ok",
			cancel: "Cancelar",
		  },
		},
		messageInput: {
		  tooltip: {
			signature: "Habilitar/Deshabilitar Firma",
			privateMessage: "Habilitar/Deshabilitar Mensaje Privado",
		  },
		  type: {
			imageVideo: "Fotos y videos",
			cam: "Cámara",
			contact: "Contacto"
		  }
		},
		messageOptionsMenu: {
		  delete: "Eliminar",
		  reply: "Responder",
		  edit: "Editar",
		  forward: "Reenviar",
		  toForward: "Reenviar",
		  talkTo: "Hablar Con",
		  confirmationModal: {
			title: "¿Borrar mensaje?",
			message: "Esta acción no se puede revertir.",
		  },
		},
		invoices: {
		  table: {
			invoices: "Facturas",
			details: "Detalles",
			users: "Usuarios",
			connections: "Conexiones",
			queue: "Colas",
			value: "Valor",
			expirationDate: "Fecha Venc.",
			action: "Acción"
		  }
		},
		backendErrors: {
		  ERR_NO_OTHER_WHATSAPP: "Debe haber al menos un WhatsApp predeterminado.",
		  ERR_NO_DEF_WAPP_FOUND: "No se encontró WhatsApp predeterminado. Verifique la página de conexiones.",
		  ERR_WAPP_NOT_INITIALIZED: "Esta sesión de WhatsApp no se ha inicializado. Verifique la página de conexiones.",
		  ERR_WAPP_CHECK_CONTACT: "No se pudo verificar el contacto de WhatsApp. Verifique la página de conexiones",
		  ERR_WAPP_INVALID_CONTACT: "Este no es un número de Whatsapp válido.",
		  ERR_WAPP_DOWNLOAD_MEDIA: "No se pudo descargar el medio de WhatsApp. Verifique la página de conexiones.",
		  ERR_INVALID_CREDENTIALS: "Error de autenticación. Por favor, intente nuevamente.",
		  ERR_SENDING_WAPP_MSG: "Error al enviar el mensaje de WhatsApp. Verifique la página de conexiones.",
		  ERR_DELETE_WAPP_MSG: "No se pudo eliminar el mensaje de WhatsApp.",
		  ERR_OTHER_OPEN_TICKET: "Ya existe un ticket abierto para este contacto.",
		  ERR_SESSION_EXPIRED: "Sesión expirada. Por favor inicie sesión.",
		  ERR_USER_CREATION_DISABLED: "La creación de usuarios ha sido deshabilitada por el administrador.",
		  ERR_NO_PERMISSION: "No tiene permiso para acceder a este recurso.",
		  ERR_DUPLICATED_CONTACT: "Ya existe un contacto con este número.",
		  ERR_NO_SETTING_FOUND: "No se encontró ninguna configuración con este ID.",
		  ERR_NO_CONTACT_FOUND: "No se encontró ningún contacto con este ID.",
		  ERR_NO_TICKET_FOUND: "No se encontró ningún ticket con este ID.",
		  ERR_NO_USER_FOUND: "No se encontró ningún usuario con este ID.",
		  ERR_NO_WAPP_FOUND: "No se encontró ningún WhatsApp con este ID.",
		  ERR_CREATING_MESSAGE: "Error al crear el mensaje en la base de datos.",
		  ERR_CREATING_TICKET: "Error al crear el ticket en la base de datos.",
		  ERR_FETCH_WAPP_MSG: "Error al buscar el mensaje en WhatsApp, tal vez sea muy antiguo.",
		  ERR_QUEUE_COLOR_ALREADY_EXISTS: "Este color ya está en uso, elija otro.",
		  ERR_WAPP_GREETING_REQUIRED: "El mensaje de saludo es obligatorio cuando hay más de una cola.",
		  ERR_OUT_OF_HOURS: "¡Fuera del Horario de Trabajo!",
		},
	  },
	},
  };
  
  export { messages };