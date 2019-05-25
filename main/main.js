/**
 * @param inputs {Object}
 * inputs.distance {Number}：行驶里程（单位：km），按里程收取distance fare
 * inputs.parkTime {Number}：停车等待时长（单位：分钟），按时长收取park fare
 * @return {Number} 总费用（单位：元），四舍五入取整
 */
module.exports = function main(inputs) {

    let baseDistanceLimitKm = 2; // 该里程以内按baseFare计价
    let baseFare = 6;

    let normalDistanceLimitKm = 8; // 该里程以内按normalFarePerKm计公里价，以外按exceedingFarePerKm计公里价
    let normalFarePerKm = 0.8;
    let exceedingFarePerKm = 1.2;

    let waitingFarePerMin = 0.25;

    return Math.round(distanceFare(inputs.distance) + parkFare(inputs.parkTime));

    function distanceFare(distanceKm) {
        return baseFare +
            normalDistance(distanceKm) * normalFarePerKm +
            exceedingDistance(distanceKm) * exceedingFarePerKm;
    }

    function parkFare(parkTimeMin) {
        return parkTimeMin * waitingFarePerMin;
    }

    function normalDistance(distanceKm) {
        if (distanceKm <= baseDistanceLimitKm) {
            return 0;
        }

        if (distanceKm <= normalDistanceLimitKm) {
            return distanceKm - baseDistanceLimitKm;
        }

        return normalDistanceLimitKm - baseDistanceLimitKm;
    }

    function exceedingDistance(distanceKm) {
        if (distanceKm <= normalDistanceLimitKm) {
            return 0;
        }

        return distanceKm - normalDistanceLimitKm;
    }
};