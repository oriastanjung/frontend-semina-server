import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import BreadCrumb from '../../components/BreadCrumb';
import Button from '../../components/Button';
import Table from '../../components/TableWithAction';
import SearchInput from '../../components/SearchInput';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchTransactions,
  setKeyword,
  setPage,
  setEvent,
  setDate,
} from '../../redux/transactions/actions';
import AlertMessage from '../../components/Alert';
import SelectBox from '../../components/SelectBox';
import { fetchListEvents } from '../../redux/lists/actions';
import DateRange from '../../components/InputDate';
import { formatDate } from '../../utils/formatDate';

function TransactionsPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const notif = useSelector((state) => state.notif);
  const transactions = useSelector((state) => state.transactions);
  const lists = useSelector((state) => state.lists);
  let [isShowed, setIsShowed] = React.useState(false);

  useEffect(() => {
    return () => {
      if (!user.token) return navigate('/login');
    };
  });

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [
    dispatch,
    transactions.keyword,
    transactions.page,
    transactions.event,
    transactions.date,
  ]);

  useEffect(() => {
    dispatch(fetchListEvents());
  }, [dispatch]);

  const displayDate = `${
    transactions.date?.startDate ? formatDate(transactions.date?.startDate) : ''
  }${
    transactions.date?.endDate
      ? ' - ' + formatDate(transactions.date.endDate)
      : ''
  }`;

  return (
    <Container>
      <Button action={() => navigate('/transactions/create')}>Tambah</Button>
      <BreadCrumb textSecound={'Transactions'} />
      <Row>
        <Col>
          <SearchInput
            name='keyword'
            query={transactions.keyword}
            handleChange={(e) => dispatch(setKeyword(e.target.value))}
          />
        </Col>
        <Col>
          <SelectBox
            placeholder={'Masukan pencarian event'}
            name='event'
            value={transactions.event}
            options={lists.events}
            isClearable={true}
            handleChange={(e) => dispatch(setEvent(e))}
          />
        </Col>
        <Col
          className='cursor-pointer position-relative'
          onClick={() => setIsShowed(true)}
        >
          <SearchInput disabled query={displayDate} />
          {isShowed ? (
            <DateRange
              date={transactions.date}
              setIsShowed={() => setIsShowed(!isShowed)}
              onChangeDate={(ranges) => dispatch(setDate(ranges.selection))}
            />
          ) : (
            ''
          )}
        </Col>
      </Row>

      {notif.status && (
        <AlertMessage type={notif.typeNotif} message={notif.message} />
      )}
      <Table
        status={transactions.status}
        thead={['Nama', 'Email', 'Judul', 'Tanggal', 'Tempat']}
        data={transactions.data}
        tbody={['name', 'email', 'title', 'date', 'venueName']}
        pages={transactions.pages}
        actionNotDisplay
        handlePageClick={({ selected }) => dispatch(setPage(selected + 1))}
      />
    </Container>
  );
}

export default TransactionsPage;
