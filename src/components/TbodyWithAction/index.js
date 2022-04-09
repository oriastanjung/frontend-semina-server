import React from 'react';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

function TbodyWithAction({
  data,
  display,
  editUrl,
  deleteAction,
  customAction,
  actionNotDisplay,
}) {
  const navigate = useNavigate();
  return (
    <tbody>
      {data.length ? (
        data.map((data, index) => {
          return (
            <tr key={index}>
              {Object.keys(data).map(
                (key) =>
                  display.indexOf(key) > -1 && <td key={key}>{data[key]}</td>
              )}
              {!actionNotDisplay && (
                <td>
                  {editUrl && (
                    <Button
                      variant='success'
                      size={'sm'}
                      action={() => navigate(`${editUrl}/${data._id}`)}
                    >
                      Edit
                    </Button>
                  )}
                  {deleteAction && (
                    <Button
                      className={'mx-2'}
                      variant='danger'
                      size={'sm'}
                      action={() => deleteAction(data._id)}
                    >
                      Hapus
                    </Button>
                  )}
                </td>
              )}
            </tr>
          );
        })
      ) : (
        <tr>
          <td colSpan={display.length + 1} style={{ textAlign: 'center' }}>
            Tidak Ditemukan Data
          </td>
        </tr>
      )}
    </tbody>
  );
}

export default TbodyWithAction;
