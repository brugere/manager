import map from 'lodash/map';
import sortBy from 'lodash/sortBy';
import {
  METRICS_TIME_RANGES,
  CHART_METRICS_OPTIONS,
  CHART_METRICS_REFRESH_INTERVAL,
} from '../../databases.constants';

export default class {
  /* @ngInject */
  constructor(
    $anchorScroll,
    $translate,
    $q,
    CucCloudMessage,
    DatabaseService,
    PciChartjsFactory,
  ) {
    this.$anchorScroll = $anchorScroll;
    this.$translate = $translate;
    this.$q = $q;
    this.CucCloudMessage = CucCloudMessage;
    this.DatabaseService = DatabaseService;
    this.PciChartjsFactory = PciChartjsFactory;
    this.isLoading = true;
    [this.selectedTimeRange] = METRICS_TIME_RANGES;
    this.timeRanges = METRICS_TIME_RANGES;
    this.metricsData = {};
    this.autoRefresh = false;
  }

  $onInit() {
    this.messageContainer =
      'pci.projects.project.storages.databases.dashboard.metrics';
    this.loadMessages();
    this.trackDatabases('metrics', 'page');

    this.isLoading = false;

    for (let i = 0; i < this.availableMetrics.length; i += 1) {
      this.metricsData[this.availableMetrics[i]] = {};
      this.metricsData[
        this.availableMetrics[i]
      ].chart = new this.PciChartjsFactory(
        angular.copy(CHART_METRICS_OPTIONS.chart),
      );

      this.metricsData[this.availableMetrics[i]].chart.setTitle(
        this.availableMetrics[i],
      );

      this.metricsData[
        this.availableMetrics[i]
      ].chart.setTooltipCallback('label', (item) =>
        parseFloat(item.value, 10).toFixed(2),
      );
    }

    this.getMetrics();
  }

  $onDestroy() {
    clearInterval(this.interval);
  }

  loadMessages() {
    this.CucCloudMessage.unSubscribe(this.messageContainer);
    this.messageHandler = this.CucCloudMessage.subscribe(
      this.messageContainer,
      { onMessage: () => this.refreshMessages() },
    );
  }

  refreshMessages() {
    this.messages = this.messageHandler.getMessages();
  }

  getMetrics() {
    for (let i = 0; i < this.availableMetrics.length; i += 1) {
      this.DatabaseService.getMetrics(
        this.projectId,
        this.database.engine,
        this.database.id,
        this.availableMetrics[i],
        this.selectedTimeRange.value,
      ).then((data) => {
        const metrics = sortBy(data.metrics, 'hostname');
        this.metricsData[data.name].data = data;

        for (let j = 0; j < metrics.length; j += 1) {
          this.metricsData[data.name].chart.updateSerie(
            metrics[j].hostname.substring(0, metrics[j].hostname.indexOf('-')),
            map(metrics[j].dataPoints, (point) => ({
              x: moment.unix(point.timestamp),
              y: point.value,
            })),
            {
              dataset: {
                fill: true,
                borderWidth: 1,
              },
            },
          );
        }
      });
    }
  }

  selectTimeRange(timeRange) {
    this.selectedTimeRange = timeRange;

    this.getMetrics();
  }

  onChangeAutoRefresh(autoRefresh) {
    this.autoRefresh = autoRefresh;

    clearInterval(this.interval);
    if (autoRefresh) {
      this.interval = setInterval(() => {
        this.getMetrics();
      }, CHART_METRICS_REFRESH_INTERVAL);
    }
  }
}
