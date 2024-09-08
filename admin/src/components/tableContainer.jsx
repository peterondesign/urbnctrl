import classname from "classnames";

const TableContainer = ({ header = [], column, body, message }) => {
  const gridColum = column ?? `repeat(${header?.length},1fr)`;
  return (
    <div className="border border-[#E2E2E2] rounded-t-[20px] overflow-hidden">
      <div
        className="grid bg-[#FAF9F7] items-center h-[48px] px-[16px] gap-[16px]"
        style={{ gridTemplateColumns: gridColum }}
      >
        {header?.map((h, idx) => (
          <p key={idx} className="text-[#696969] font-bold">
            {h}
          </p>
        ))}
      </div>
      <div className="min-h-[340px]">
        {body && (
          <>
            {body?.length > 0 && (
              <ul className="min-h-[340px]">
                {body?.map((l, key) => (
                  <li
                    key={key}
                    className="py-[24px] px-[16px] min-h-[40px]  gap-[16px] grid w-full"
                    style={{ gridTemplateColumns: gridColum }}
                  >
                    {l?.map((b, idx) => (
                      <div
                        key={idx}
                        className={classname("text-[14px]", {
                          "font-semibold": b?.bold,
                        })}
                      >
                        {b?.element ? b?.element : <p>{b?.text}</p>}
                      </div>
                    ))}
                  </li>
                ))}
              </ul>
            )}
            {body?.length === 0 && (
              <div className="h-[340px] pb-[48px] grid place-items-center">
                <p>{message ?? "No content"}</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default TableContainer;
