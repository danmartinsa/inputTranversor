export interface TestDef {
    testId: number;
    testCategory: string;
    testName: string;
    testDomains?: TestDomain[];
    testEnvironments?: TestEnvironment[];
    outputDatasets?: OutputDataset[];
}

export interface OutputDataset {
    outputDatasetId: number;
    outputDatasetName: string;
    conformedDatasetName: string;
    conformedDatasetId: number;
    datasetSchema?: DatasetSchema;
    datasetInterpretation?: DatasetInterpretation;
    visualComponents?: VisualComponent[];
}

export interface DatasetInterpretation {
    calculations?: Calculation[];
    interpretationTextDefinition?: InterpretationTextDefinition[];
}

export interface Calculation {
    calculationName: string;
    calculationType: string;
    collectionLocation: CollectionLocation;
    evaluationAttribute: EvaluationAttribute;
    itemPopulationAttribute: string;
    thresholdDefinitionLocation: string;
    thresholdLabelAttribute: string;
    onMissingInput: string;
    onException: string;
}

export enum CollectionLocation {
    KSTestResults = "$.KSTestResults",
}

export enum EvaluationAttribute {
    ConclusionTextLabel = "ConclusionTextLabel",
    DatasetName = "DatasetName",
    IntervalTextLabel = "IntervalTextLabel",
    KSStatistic = "KSStatistic",
    PValue = "PValue",
    RegressionOrder = "RegressionOrder",
    SeriesEndEpoch = "SeriesEndEpoch",
    SeriesStartEpoch = "SeriesStartEpoch",
}

export interface InterpretationTextDefinition {
    levelOfDetail: LevelOfDetail;
    textDefinition: TextDefinition[];
}

export enum LevelOfDetail {
    High = "High",
    Low = "Low",
    Mid = "Mid",
}

export interface TextDefinition {
    type: TypeEnum;
    conditions?: any[];
    conditionsOnEachIteration?: ConditionsOnEachIteration[];
    collectionLocation?: CollectionLocation;
    iterationTextType?: IterationTextType;
    iterationDelimiter?: string;
    iterationFinalDelimiter?: string;
    newLineAfterEachItem?: string;
    textTemplate?: string;
    iterativeReplacements?: IterativeReplacement[];
}

export interface ConditionsOnEachIteration {
    conditionType: ConditionType;
    evaluationAttribute: ConditionsOnEachIterationEvaluationAttribute;
    equalValue?: LevelOfDetail;
    conditionLinkage: ConditionLinkage;
}

export enum ConditionLinkage {
    And = "AND",
}

export enum ConditionType {
    AttributeNotPopulated = "AttributeNotPopulated",
    AttributePopulated = "AttributePopulated",
    AttributeToSingleValue = "AttributeToSingleValue",
}

export enum ConditionsOnEachIterationEvaluationAttribute {
    ConfidenceIntervalGroupTextLabel = "$.ConfidenceIntervalGroupTextLabel",
    RegressionOrder = "$.RegressionOrder",
    SeriesEndEpoch = "$.SeriesEndEpoch",
    SeriesStartEpoch = "$.SeriesStartEpoch",
}

export enum IterationTextType {
    List = "List",
}

export interface IterativeReplacement {
    placeholderText: PlaceholderText;
    valueJSONPath: EvaluationAttribute;
    dataType: Type;
    dataFormat?: DataFormat;
}

export enum DataFormat {
    MMMMDYyyy = "MMMM d, yyyy",
}

export enum Type {
    Date = "date",
    Number = "number",
    String = "string",
}

export enum PlaceholderText {
    DatasetName = "[DatasetName]",
    Interval = "[Interval]",
    Ks = "[KS]",
    P = "[p]",
    RegressionOrder = "[RegressionOrder]",
    SeriesEndEpoch = "[SeriesEndEpoch]",
    SeriesStartEpoch = "[SeriesStartEpoch]",
}

export enum TypeEnum {
    IterativeText = "IterativeText",
    ParagraphEnd = "ParagraphEnd",
    ParagraphStart = "ParagraphStart",
}

export interface DatasetSchema {
    $schema: string;
    type: string;
    properties?: Properties;
    required?: string[];
    // ksDistributions?: KSDistributions;
}

export interface KSDistributions {
    type: string;
    properties: KSDistributionsProperties;
}

export interface KSDistributionsProperties {
    dataPoints: DataPoints;
}

export interface DataPoints {
    type: string;
    items: DataPointsItems;
}

export interface DataPointsItems {
    type: string;
    properties: PurpleProperties;
    required: string[];
}

export interface PurpleProperties {
    xValueDistribution: DatasetName;
    yValueDistribution: DatasetName;
}

export interface DatasetName {
    type: Type;
}

export interface Properties {
    [name: string]: Item
}

export interface Item {
    items?: Item
    type?: string
    properties?: Properties
    required?: string[]
}

export interface TestResults {
    type: string;
    items: KSTestResultsItems;
}

export interface KSTestResultsItems {
    type: string;
    properties: FluffyProperties;
    required: string[];
}

export interface FluffyProperties {
    pValue: DatasetName;
    ksStatistic: DatasetName;
    regressionOrder: DatasetName;
    seriesStartEpoch: DatasetName;
    seriesEndEpoch: DatasetName;
    datasetName: DatasetName;
    datasetType: DatasetName;
}

export interface KSThresholds {
    type: string;
    items: KSThresholdsItems;
}

export interface KSThresholdsItems {
    type: string;
    properties: TentacledProperties;
    required: string[];
    additionalProperties: boolean;
}

export interface TentacledProperties {
    intervalText: DatasetName;
    conclusion: DatasetName;
    confidenceIntervalGroup: DatasetName;
    minValue: DatasetName;
    lessThanValue: DatasetName;
    greaterThanValue: DatasetName;
    maxValue: DatasetName;
}

export interface VisualComponent {
    testOutputVisualComponentId: number;
    visualComponentId: number;
    outputDatasetId: number;
    testOutputVisualComponentName: string;
    visualComponentName: string;
    order: number;
    datasetMappingJSON: DatasetMappingJSON;
    defaultFormatJSON: DefaultFormatJSON;
    levelOfDetails: LevelOfDetail[];
}

export interface DatasetMappingJSON {
    targetJSONBaseStructure: TargetJSONBaseStructure;
    directPathPopulation: DirectPathPopulation[];
}

export interface DirectPathPopulation {
    targetJSONPath: string;
    sourceJSONPath?: string;
    addIfMissing?: boolean;
    targetDataType?: string;
    operation?: string;
    itemDefinition?: ItemDefinitionElement[];
}

export interface ItemDefinitionElement {
    sourceJSONPath: string;
    sourceDataType: string;
    targetDataType: string;
    operation: string;
    properties: PurpleProperty[];
}

export interface PurpleProperty {
    propertyName: string;
    relativeSourceJSONPath: string;
    targetDataType: string;
    operation?: string;
    itemDefinition?: PropertyItemDefinition;
}

export interface PropertyItemDefinition {
    targetDataType: string;
    properties: FluffyProperty[];
}

export interface FluffyProperty {
    propertyName: string;
    relativeSourceJSONPath: string;
    targetDataType: Type;
}

export interface TargetJSONBaseStructure {
    html?: string;
    data?: Data;
    simpleTextReplace?: SimpleTextReplace[];
    tableDefinition?: TableDefinition;
    xAxisTitle?: string;
    yAxisTitle?: string;
    graphs?: any[];
}

export interface Data {
}

export interface SimpleTextReplace {
    placeholderDefinition: string;
    dataPath: string;
}

export interface TableDefinition {
    tableStyle: string;
    headerHTML: string;
    rowTemplate: RowTemplate;
}

export interface RowTemplate {
    rowJSONPath: CollectionLocation;
    columns: Column[];
}

export interface Column {
    columnType: string;
    relativeJSONPath: EvaluationAttribute;
    dataType: Type;
    style?: string;
    conditionalStyle?: ConditionalStyle;
}

export interface ConditionalStyle {
    evaluationRelativeJSONPath: string;
    conditions: Condition[];
}

export interface Condition {
    equalValue: LevelOfDetail;
    style: string;
}

export interface DefaultFormatJSON {
    html?: string;
}

export interface TestDomain {
    domainId: number;
    domainName: string;
    domainDescription: string;
}

export interface TestEnvironment {
    environmentId: number;
    environmentName: string;
    environmentDescription: string;
}

