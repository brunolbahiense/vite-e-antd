import { useState } from 'react'
import { ConfigProvider, DatePicker } from 'antd';
import ptBR from 'antd/es/locale/pt_BR';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

// O range nos tras as datas de inicio(range[0]) e fim(range[1]) em um array
// o ChosenDate será o responsavel por enviar o valor selecionado neste componente para o "pai" que o chamou (App.jsx)
function Calendar({ range, chosenDate }) {
    dayjs.extend(customParseFormat);
    const dateFormat = 'YYYY/MM/DD';
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];

    const [date, setDate] = useState(null);
    const handleChange = (date, dateString) => {
        chosenDate(dateString)
        setDate(dateString)
    };

    // Função basica de define as cores internas do calendario
    const calendarTheme = {
        components: {
            DatePicker: {
                colorPrimary: '#7c0f95',
                colorPrimaryHover: '#7c0f95'
            }
        },
    }

    return (
        <ConfigProvider locale={ptBR} theme={calendarTheme}>
            <DatePicker
                defaultValue={dayjs(range[0], dateFormat)}
                format={dateFormatList}
                minDate={dayjs(range[0], dateFormat)}
                maxDate={dayjs(range[1], dateFormat)}
                onChange={handleChange}
            />
        </ConfigProvider>   
    )
}

export default Calendar
