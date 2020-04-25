import React from 'react'
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';

import * as MailComposer from 'expo-mail-composer';

import styles from './styles'
import logoImg from '../../assets/logo.png';
import {
    Action,
    ActionText,
    Actions,
    ContactBox,
    Container,
    Header,
    HeroDescription,
    HeroTitle,
    Incident,
    IncidentProperty,
    IncidentValue
} from './style';

export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();
    const incident = route.params.incident;

    const message = `Olá ${incident.name}, estou entrado em contato pois gostaria de ajudar no caso "${incident.title}" com o valor  ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}`

    function navigateBack() {
        navigation.goBack();
    }

    function sendEmail() {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message
        });
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?text=${message}&phone=${incident.whatsapp}`);
    }

    return (
        <Container>
            <Header>
                <Image source={logoImg} />

                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={16} colo="#E82041" />
                </TouchableOpacity>
            </Header>

            <Incident>
                {/* <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text> */}
                <IncidentProperty>ONG:</IncidentProperty>
                <IncidentValue>{incident.name}</IncidentValue>

                <IncidentProperty>CASO:</IncidentProperty>
                <IncidentValue>{incident.title}</IncidentValue>

                <IncidentProperty>VALOR:</IncidentProperty>
                <IncidentValue> {
                    Intl.NumberFormat('pt-BR', { 
                    style: 'currency',
                    currency: 'BRL'
                    }).format(incident.value)}
                </IncidentValue>
            </Incident>

            <ContactBox>
                <HeroTitle>Salve o dia!</HeroTitle>
                <HeroTitle>Seja o heroi desse caso</HeroTitle>

                <HeroDescription>Entre em contato:</HeroDescription>

                <Actions>
                    <Action onPress={ sendWhatsapp }>
                        <ActionText>Whtsapp</ActionText>
                    </Action>

                    <Action onPress={ sendEmail }>
                        <ActionText>E-mail</ActionText>
                    </Action>
                </Actions>
            </ContactBox>
        </Container>
    );
}