def solution(participant, completion):
        participant.sort()
        completion.sort()
        for i in range(len(participant)-1):
            if(participant[i]!=completion[i]):
                return participant[i]
        return participant[-1] #if문에 안걸린 경우 : 마지막 참가자가 도착하지 못한 경우 예외처리
