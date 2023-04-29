def solution(nums):
    unique_types = len(set(nums))
    # nums 에서 set을 통해 unique한 포켓몬의 종류를 unique_types에 저장
    if len(nums) / 2 > unique_types:
        return unique_types
    # 만약, nums/2의 크기가 더 크다면 unique types.
    else:
        return len(nums) / 2
    # 그렇지 않다면, nums/2가 가장 큰 경우의 수