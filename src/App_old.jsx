import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Calendar from './components/Calendar'
import './App.css'
import { Button, AutoComplete, Switch, ConfigProvider, DatePicker, FloatButton } from 'antd';
import { SearchOutlined, WhatsAppOutlined } from '@ant-design/icons'
import ptBR from 'antd/es/locale/pt_BR';


import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';




function App() {
  const [count, setCount] = useState(0)
  const [selectedDate, setSelectedDate] = useState(null)
  const [options, setOptions] = useState([]);
  const emails = ['gmail.com', 'hotmail.com', 'outlook.com', 'icloud.com']

  const handleSelectedDate = (value) => {
    setSelectedDate(value);
    console.log('data', value)
  };
  const handleSearch = (value) => {
    setOptions(() => {
      if (!value || value.includes('@')) {
        return [];
      }
      return emails.map((domain) => ({
        label: `${value}@${domain}`,
        value: `${value}@${domain}`,
      }));
    });
  };

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };


  dayjs.extend(customParseFormat);

  const { RangePicker } = DatePicker;

  const dateFormat = 'YYYY/MM/DD';
  const weekFormat = 'MM/DD';
  const monthFormat = 'YYYY/MM';

  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];

  const customFormat = (value) =>
    `custom format: ${value.format(dateFormat)}`;

  const customWeekStartEndFormat = (value) =>
    `${dayjs(value).startOf('week').format(weekFormat)} ~ ${dayjs(value)
      .endOf('week')
      .format(weekFormat)}`;

  return (
    <>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Antd</h1>
      <h2>Testando os componentes e integrações da lib</h2>
      <div className="card">
        <Button type="primary" color="purple" variant="solid" icon={<WhatsAppOutlined />} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <ConfigProvider
          locale={ptBR}
          theme={{
            components: {
              Switch: {
                /* here is your component tokens */
                colorPrimary: '#7c0f95',
                colorPrimaryHover: '#7c0f95'
              },
              FloatButton: {
                /* here is your component tokens */
                colorPrimary: '#1fa528',
                colorPrimaryHover: '#1fa528'
              },
            },
          }}
        >
          <DatePicker
            defaultValue={dayjs('01/01/2015', dateFormatList[0])}
            format={dateFormatList}
            minDate={dayjs('2025-03-01', dateFormat)}
            maxDate={dayjs('2025-03-15', dateFormat)}
          />
          <FloatButton
            icon={<WhatsAppOutlined />}
            type="primary"
            color="green"
            variant="solid"
            style={{
              insetInlineEnd: 9,
            }}
          />

          <AutoComplete
            style={{
              width: 200,
            }}
            onSearch={handleSearch}
            placeholder="input here"
            options={options}
          />

          <Switch default Checked onChange={onChange} />
        </ConfigProvider>
      </div>

      <Calendar range={['2025-03-03', '2025-03-10']} chosenDate={handleSelectedDate}/>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
