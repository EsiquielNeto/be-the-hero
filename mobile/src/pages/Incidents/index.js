import React, { useState, useEffect } from 'react'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native';

import api from '../../services/api';
import logoImg from '../../assets/logo.png';

import {
    Container,
    Description,
    DetailButton,
    DetailsButtonText,
    Header,
    HeaderText,
    HeaderTextBold,
    Incident,
    IncidentList,
    IncidentProperty,
    IncidentValue,
    Title
} from './styles';

export default function Incidents() {
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    function navigateToDetail(incident) {
        navigation.navigate('Detail', { incident });
    }

    async function loadIncidents() {
        if (loading) {
            return;
        }

        if (total > 0 && incidents.length === total) {
            return;
        }

        setLoading(true);

        const response = await api.get('incidents', {
            params: { page }
        });

        setIncidents([...incidents, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1)
        setLoading(false);
    }

    useEffect(() => {
        loadIncidents();
    }, []);

    return (

        <Container>
            <Header>
                <Image source={logoImg} />

            </Header>

            <Title>Bem vindo!</Title>
            <Description>Escolha um dos casos abaixo e salve</Description>
            <HeaderText>
                Total de <HeaderTextBold> {total} casos </HeaderTextBold>
            </HeaderText>


            <FlatList
                data={incidents}
                styles="marginTop: 32px;"
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={({ item: incident }) => (

                    <IncidentList>

                        <Incident>
                            <IncidentProperty>ONG:</IncidentProperty>
                            <IncidentValue>{incident.name} de {incident.city}/{incident.uf}</IncidentValue>

                            <IncidentProperty>CASO:</IncidentProperty>
                            <IncidentValue>{incident.title}</IncidentValue>

                            <IncidentProperty>VALOR:</IncidentProperty>
                            <IncidentValue>
                                {Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(incident.value)}
                            </IncidentValue>

                            <DetailButton onPress={() => navigateToDetail(incident)}>
                                <DetailsButtonText>Ver mais detalhes</DetailsButtonText>
                                <Feather name="arrow-right" size={16} color="#E02041" />
                            </DetailButton>
                        </Incident>

                    </IncidentList>
                )}
            />

        </Container>

    );
}