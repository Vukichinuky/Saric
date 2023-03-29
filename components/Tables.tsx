import { Table } from '@nextui-org/react';
import TableGalerija from './TableGalerija';


export default function Tables() {
    return (




        <main className='bg6'>
            <div className='p-10 sm:px-48'>

                <h1 className='sm:text-4xl font-bold text-2xl  text-slate-800 p-4'>W&H AD 2360/16</h1>
                <Table

                    className=' bg-[#F7F7FE] text-xs  '
                    lined
                    striped
                    sticked
                    aria-label="WAH masina"
                    css={{
                        height: "auto",
                        minWidth: "100%",
                    }}

                >
                    <Table.Header>
                        <Table.Column>Description</Table.Column>
                        <Table.Column> </Table.Column>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row key="1">
                            <Table.Cell>Manufacturer</Table.Cell>
                            <Table.Cell>W&H</Table.Cell>
                        </Table.Row>

                        <Table.Row key="2">
                            <Table.Cell>Type</Table.Cell>
                            <Table.Cell>AD</Table.Cell>
                        </Table.Row>
                        <Table.Row key="3">
                            <Table.Cell>Model</Table.Cell>
                            <Table.Cell>2360 / <br /> 16 S-belt</Table.Cell>
                        </Table.Row>
                        <Table.Row key="4">
                            <Table.Cell>Year</Table.Cell>
                            <Table.Cell>1973</Table.Cell>
                        </Table.Row>
                        <Table.Row key="5" css={{ backgroundColor: "#F1F3F5", borderRadius: "20%" }}>
                            <Table.Cell>Technical Details</Table.Cell>
                            <Table.Cell> </Table.Cell>
                        </Table.Row>

                        <Table.Row key="6">
                            <Table.Cell>Bag width</Table.Cell>
                            <Table.Cell>35 – 65 cm</Table.Cell>
                        </Table.Row>
                        <Table.Row key="7">
                            <Table.Cell>Tube length <br /> for mini bottom width</Table.Cell>
                            <Table.Cell>56 – 150 cm</Table.Cell>
                        </Table.Row>
                        <Table.Row key="8">
                            <Table.Cell>Tube length <br /> for maxi bottom width	</Table.Cell>
                            <Table.Cell>96 – 164 cm</Table.Cell>
                        </Table.Row>
                        <Table.Row key="9">
                            <Table.Cell>Sack length <br /> (Stepped end)</Table.Cell>
                            <Table.Cell>37 – 130 cm</Table.Cell>
                        </Table.Row>
                        <Table.Row key="10">
                            <Table.Cell>Sack length <br /> (Flush cut)	</Table.Cell>
                            <Table.Cell>37 – 130 cm
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row key="11">
                            <Table.Cell>Bottom width <br /> (Stepped end)	</Table.Cell>
                            <Table.Cell>7 – 16 cm
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row key="12">
                            <Table.Cell>Bottom width <br /> (Flush cut)	</Table.Cell>
                            <Table.Cell>7 – 16 cm
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row key="13">
                            <Table.Cell>Bottom center <br /> distances	</Table.Cell>
                            <Table.Cell>30 – 120 cm
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row key="14">
                            <Table.Cell>Valve cut off length	</Table.Cell>
                            <Table.Cell>9 – 23 cm
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row key="15">
                            <Table.Cell>Bottom patch <br /> cut off length	</Table.Cell>
                            <Table.Cell>18 – 60 cm
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row key="16">
                            <Table.Cell>Sacks / min	</Table.Cell>
                            <Table.Cell>140 pcs / min
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row key="17">
                            <Table.Cell>Valve station	</Table.Cell>
                            <Table.Cell>Yes</Table.Cell>
                        </Table.Row>
                        <Table.Row key="18">
                            <Table.Cell>Bottom patch unit	</Table.Cell>
                            <Table.Cell>	2 + 2 colors <br /> printing on the bottom <br />
                                patch unit on <br /> the valve side <br />
                                and 1 colours <br /> on the other <br />
                                side ( possibility <br /> 2 +2 on each side)</Table.Cell>
                        </Table.Row>
                        <Table.Row key="19">
                            <Table.Cell>Pressing and counting	</Table.Cell>
                            <Table.Cell>S-belt, counting <br /> and packetizer W&H
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row key="20">
                            <Table.Cell>Offer validity	</Table.Cell>
                            <Table.Cell>Machine available <br /> but subject to <br /> prior sales
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row key="21">
                            <Table.Cell>Availability</Table.Cell>
                            <Table.Cell>Right now
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row key="22">
                            <Table.Cell>Terms of sale	</Table.Cell>
                            <Table.Cell>	Second hand <br /> equipment <br /> 100% before <br /> dismantling by <br />
                                L/C open <br /> in our favour <br /> in our bank</Table.Cell>
                        </Table.Row>
                        <Table.Row key="23">
                            <Table.Cell>Dismantling</Table.Cell>
                            <Table.Cell>Included</Table.Cell>
                        </Table.Row>
                        <Table.Row key="24">
                            <Table.Cell>Transport</Table.Cell>
                            <Table.Cell>Not included
                            </Table.Cell>
                        </Table.Row>

                    </Table.Body>
                </Table>
                <TableGalerija />
            </div>   </main >
    )
}
