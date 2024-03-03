import { Fragment } from "react";
import { PolicyholderData } from "../../models/Policyholder.model";
import InfoCard from "./InfoCard";
interface IProps {
  data: PolicyholderData[];
  handleSearch: (code: string) => void;
  mainCode: string;
}
const TreeLayer = ({ data, handleSearch, mainCode }: IProps) => {
  return (
    <div style={{ position: "relative" }}>
      {data
        .filter((_, idx) => idx < 7)
        .map((ele, i) => {
          const layer = Math.floor(Math.log2(i + 1));
          const eachCount = i + 1 - Math.pow(2, layer);
          //   console.log(`i=${i},layer=${layer},eachcount=${eachCount}`);
          return (
            <Fragment key={i}>
              {layer !== 0 && eachCount === 0 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="500"
                  height="122"
                >
                  <line
                    x1={290 + -80 * layer}
                    y1="62"
                    x2={290 + -80 * layer}
                    y2="92"
                    style={{ stroke: "gray", strokeWidth: "2px" }}
                  />
                  <line
                    x1={220 + -80 * layer}
                    y1="92"
                    x2={220 + 240 / layer + -80 * layer}
                    y2="92"
                    style={{ stroke: "gray", strokeWidth: "2px" }}
                  />
                  <line
                    x1={220 + -80 * layer}
                    y1="92"
                    x2={220 + -80 * layer}
                    y2="122"
                    style={{ stroke: "gray", strokeWidth: "2px" }}
                  />
                  <line
                    x1={220 + 240 / layer + -80 * layer}
                    y1="92"
                    x2={220 + 240 / layer + -80 * layer}
                    y2="122"
                    style={{ stroke: "gray", strokeWidth: "2px" }}
                  />
                  {layer === 2 && (
                    <>
                      <line
                        x1={220 + -80 * layer + 310}
                        y1="62"
                        x2={220 + -80 * layer + 310}
                        y2="92"
                        style={{ stroke: "gray", strokeWidth: "2px" }}
                      />
                      <line
                        x1={220 + -80 * layer + 240}
                        y1="92"
                        x2={340 + -80 * layer + 240}
                        y2="92"
                        style={{ stroke: "gray", strokeWidth: "2px" }}
                      />
                      <line
                        x1={220 + -80 * layer + 240}
                        y1="92"
                        x2={220 + -80 * layer + 240}
                        y2="122"
                        style={{ stroke: "gray", strokeWidth: "2px" }}
                      />
                      <line
                        x1={340 + -80 * layer + 240}
                        y1="92"
                        x2={340 + -80 * layer + 240}
                        y2="122"
                        style={{ stroke: "gray", strokeWidth: "2px" }}
                      />
                    </>
                  )}
                </svg>
              )}
              <InfoCard
                sx={{
                  left:
                    190 +
                    -80 * layer +
                    (240 / (layer ? layer : 1)) * eachCount +
                    "px",
                }}
                info={ele}
                type={ele.introducer_code === mainCode ? "direct" : "indirect"}
                handleClick={() => handleSearch(ele.code)}
              />
            </Fragment>
          );
        })}
    </div>
  );
};

export default TreeLayer;
